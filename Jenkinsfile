pipeline {
	environment {
    app = ''
  }
  agent any
    
  // tools {nodejs "nodejs"}
    
  stages {
        
      stage('Cloning Git') {
      steps {
       // git credentialsId: 'gitHubCred', url: 'https://github.com/shubamgupta2509/grocery-shopping-CI-CD.git'
         git 'https://github.com/ravi1singh/AngularEcommerce.git'
      }
    }
  
  
    stage('INSTALL PACKAGES') {
      steps {
        sh "npm install"
      }
    }
    stage('TEST') {
      steps {
        // echo "insert your testing here"
        // sh "ng config -g cli.warnings.versionMismatch false"
        // // sh "ng tests --progress=true --karmaConfig=karma.config.js"
        //sh "node_modules/.bin/ng test --progress=true"
      }
    }
    stage('BUILD APP') {
      steps {
        sh "node_modules/.bin/ng build"
      }
    }
     
    stage('Build image') {
        /* This builds the actual image */

	    steps{
          script{
            app = docker.build("ravi8002/angular-image");
          }
      }
    }

    stage('Test image') {
      steps{
        // app.inside {
          echo "Tests passed"
        //   }
        // ng test
      }  
        
    }

    stage('Push image') {
          steps{
            script{
                docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                    } 
            }
          	    
                echo "Trying to Push Docker Build to DockerHub"
          }
    } 
    //  stage('Execute Rundeck job') {
    //     steps {
    //       script {
    //         step([$class: "RundeckNotifier",
    //               includeRundeckLogs: true,
    //               jobId: "7911e830-0308-41f4-8854-8c33f0b9ff11",
    //               rundeckInstance: "Rundeck",
    //               shouldFailTheBuild: true,
    //               shouldWaitForRundeckJob: true,
    //               tailLog: true])
    //       }
    //     }
    // }
    
  }
}