set :branch,   'main'
set :server, "127.0.0.7"
set :env_file, 'config/environments/.env.production'
set :user, 'user-server'
set :deploy_to,"/home/#{fetch(:user)}/"
set :keep_releases, 3

server fetch(:server), user: fetch(:user), roles: %w{web app db}
