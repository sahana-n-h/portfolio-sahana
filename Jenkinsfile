pipeline {
    agent any

    environment {
        RENDER_API_KEY = credentials('render-api-key')
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_IMAGE = 'sahanahosamani117/portfolio:latest'
        RENDER_SERVICE_ID = 'srv-d1ati1nfte5s73drc4tg'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/sahana-n-h/portfolio-sahana.git', branch: 'main'
            }
        }

        stage('Check Docker') {
            steps {
                script {
                    // Verify Docker is installed
                    sh '''
                        if ! command -v docker >/dev/null 2>&1; then
                            echo "ERROR: Docker is not installed on this agent"
                            exit 1
                        fi
                        docker --version
                    '''
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKERHUB_USR', passwordVariable: 'DOCKERHUB_PSW')]) {
                    sh 'echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USR --password-stdin'
                }
            }
        }

        stage('Tag and Push to Render') {
            steps {
                sh """
                    docker pull $DOCKER_IMAGE
                    docker tag $DOCKER_IMAGE registry.render.com/$RENDER_SERVICE_ID
                    docker push registry.render.com/$RENDER_SERVICE_ID
                """
            }
        }

        stage('Deploy to Render') {
            steps {
                script {
                    def response = sh(script: """
                        curl -X POST \
                            -H 'Authorization: Bearer $RENDER_API_KEY' \
                            -H 'Content-Type: application/json' \
                            -d '{"image": "$DOCKER_IMAGE"}' \
                            https://api.render.com/v1/services/$RENDER_SERVICE_ID/deploys
                    """, returnStdout: true).trim()
                    echo "Render Deploy Response: $response"
                }
            }
        }
    }

    post {
        always {
            node('') {
                sh '''
                    if command -v docker >/dev/null 2>&1; then
                        docker logout
                    else
                        echo "Docker not installed, skipping logout"
                    fi
                '''
            }
        }
    }
}