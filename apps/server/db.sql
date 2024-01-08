-- Provide privilege to slave user from slave database
-- Should be executed from master database since it has super admin user (postgres) 
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO repl_user;
ALTER USER repl_user WITH SUPERUSER;