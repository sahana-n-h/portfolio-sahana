pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_IMAGE = 'sahanahosamani117/portfolio:latest'
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

        stage('Push Docker Image to Docker Hub') {
            steps {
                sh """
                    docker pull --platform=linux/amd64 $DOCKER_IMAGE
                    docker tag $DOCKER_IMAGE sahanahosamani117/portfolio:latest
                    docker push sahanahosamani117/portfolio:latest
                """
            }
        }

        stage('Notify Deployment') {
            steps {
                echo "Render will now pull the updated Docker image automatically."
            }
        }
    }

    post {
        always {
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
