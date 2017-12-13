node("ec2-fleet") {    
    docker.withRegistry('https://registry.hub.docker.com', '07a2c433-1194-4760-9448-35e9329d470a') {
        withSonarQubeEnv('sonarqube') {
            docker.image('connectholland/chefs-network-frontend').inside('-u 0:0') {
                sh 'echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list'
                sh 'apt-get update'
                sh 'apt-get install -y -t jessie-backports openjdk-8-jdk'
                sh 'curl --insecure -o /root/sonarscanner.zip -L https://sonarsource.bintray.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-3.0.3.778-linux.zip'
                sh ' apt-get install unzip'
                sh 'unzip /root/sonarscanner.zip -d /root/'
                sh 'cd /var/www/sources && /root/sonar-scanner-3.0.3.778-linux/bin/sonar-scanner -Dsonar.login=ed36f86fc20d6a66cf9075cbe95d92426040b1fc'
            }
        }
    }
}
