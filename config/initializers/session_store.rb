# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_watchit_session',
  :secret      => '55c16d06f0b476868c69cda6f3c9c3340347002309963f96b55928907f83d700065c9e7680ce6dcdad7f13dbc9e46a54c1e0d3892801daa3ff89b4fe2fc694c7'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
