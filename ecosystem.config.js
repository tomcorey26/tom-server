module.exports = {
  apps: [{
    name: 'tom-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-247-243.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tom-tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:tomcorey26/tom-server.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
