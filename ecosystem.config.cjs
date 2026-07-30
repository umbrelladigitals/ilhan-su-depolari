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
        PAYLOAD_SECRET: 'a8f92b7c4d1e6f3a8b2c5d9e0f1a4b7c3d6e9f2a5b8c1d4e7f0a3b6c9d2e5f8',
      },
    },
  ],
}
