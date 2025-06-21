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
                sh """
                    curl -X POST \
                    -H 'Authorization: Bearer $RENDER_API_KEY' \
                    -H 'Content-Type: application/json' \
                    -d '{"image": "$DOCKER_IMAGE"}' \
                    https://api.render.com/v1/services/$RENDER_SERVICE_ID/deploys
                """
            }
        }
    }

    post {
        always {
            sh 'docker logout' // Removed node block since agent any provides context
        }
    }
}