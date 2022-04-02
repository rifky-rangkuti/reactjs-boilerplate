lock "~> 3.14.0"

set :application, "boilerplate"
set :repo_url, "git@github.com:ddp-ipb/webgis.desapresisi.id.git"

namespace :deploy do
  desc "Build app"

  task :copy_env do 
    on roles(:app) do 
      within release_path do
        execute :cp, fetch(:env_file), '.env'
      end
    end
  end

  task :install do
    on roles(:app) do 
      within release_path do
        execute :npm, 'install --legacy-peer-deps'
      end
    end
  end

  task :build do
    on roles(:app) do 
      within release_path do
        execute "npm", "run", "build"
      end
    end
  end

  task :restart_pm2 do 
    on roles(:app) do 
        within release_path do
            execute :pm2, :delete, 'boilerplate' , "|| echo 'no process found with name co-owner' "
            execute :pm2, :start, 'ecosystem.config.js'
            execute :pm2, :startup, "|| echo 'cannot make pm2 in startup'"  
            execute :pm2, :save, "|| echo 'cannot save pm2'" 
        end
    end
  end

  after :publishing, :copy_env
  after :copy_env, :install
  after :install, :build
  after :build, :restart_pm2
end
