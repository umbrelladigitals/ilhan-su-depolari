module.exports = {
  apps: [
    {
      name: 'sudeposu-website',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3002',
      cwd: '/root/projects/sudeposuwebsite',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
}
