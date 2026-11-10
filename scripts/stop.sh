#!/usr/bin/env bash
set -e
USER="$(whoami)"
FILE="$0"
ENVIRONMENT="${1,,}"
DATE="$(date +%Y%m%d_%H%M%S)"
LOG_DIR="./logs"
LOG_FILE="${LOG_DIR}/stop_${ENVIRONMENT}_${DATE}.log"
SEPARATOR="==========================================================="

mkdir -p "$LOG_DIR"

if [[ -z "$1" ]]; then
    echo "${FILE} <dev> or <prod>"
    exit 1
fi

log() {
    echo "$1" | tee -a "$LOG_FILE"
}

log "$SEPARATOR"
log "░█▀▀░▀█▀░█▀█░█▀█░░░█▀▀░█▀█░█▀█░▀█▀░█▀█░▀█▀░█▀█░█▀▀░█▀▄"
log "░▀▀█░░█░░█░█░█▀▀░░░█░░░█░█░█░█░░█░░█▀█░░█░░█░█░█▀▀░█▀▄"
log "░▀▀▀░░▀░░▀▀▀░▀░░░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀░▀░▀"
log "$SEPARATOR"
log "USER               :${USER}"
log "ENVIRONMENT        :${ENVIRONMENT}"
log "DATE               :${DATE}"
log "$SEPARATOR"
case "$ENVIRONMENT" in
dev)
    sudo docker compose -f docker-compose.dev.yml down 2>/dev/null
    ;;
prod)
    sudo docker compose -f docker-compose.yml down 2>/dev/null
    ;;
esac
