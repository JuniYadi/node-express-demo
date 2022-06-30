pipeline {
    agent {
        ecs {
            inheritFrom 'ecs'
            image 'juniyadi/jenkins-inbound-agent:node14'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                sh 'npm -v'
                sh 'node -v'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
