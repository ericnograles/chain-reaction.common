# Assumptions: NVM installed
# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.3.1

# Global prerequisites
npm install -g npm3

# Local NPM install
npm3 install

# Run the common library
npm3 run dev