module.exports = {
  apps: [
    {
      name: 'boilerplate',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      exec_mode: 'fork',
      watch: false,
      ignore_watch: ['logs'],
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
