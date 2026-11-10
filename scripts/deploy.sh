#!/usr/bin/env bash
set -e
USER="$(whoami)"
DATE="$(date +%Y%m%d_%H%M%S)"
FILE="$0"
LOG_DIR="./logs"
LOG_FILE="${LOG_DIR}/deploy_${DATE}.log"
ENVIRONMENT="${1,,}"
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
log "██████╗ ██╗███████╗███████╗███╗   ██╗███╗   ███╗██╗██╗  ██╗"
log "██╔══██╗██║██╔════╝██╔════╝████╗  ██║████╗ ████║██║╚██╗██╔╝"
log "██║  ██║██║███████╗█████╗  ██╔██╗ ██║██╔████╔██║██║ ╚███╔╝ "
log "██║  ██║██║╚════██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║ ██╔██╗ "
log "██████╔╝██║███████║███████╗██║ ╚████║██║ ╚═╝ ██║██║██╔╝ ██╗"
log "╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝"
log "$SEPARATOR"
log "DEPLOYMENT DATE    :${DATE}"
log "ENVIRONMENT        :${ENVIRONMENT}"
log "USER               :${USER}"
log "$SEPARATOR"
case "$ENVIRONMENT" in
dev)
    if [[ -e docker-compose.dev.yml ]]; then
        log "DEVELOP ENVIRONMENT"
        sudo docker compose -f docker-compose.dev.yml up --build -d 2>&1 | tee -a "$LOG_FILE"
        sudo docker compose -f docker-compose.dev.yml logs -f 2>&1 | tee -a "$LOG_FILE"
    else
        log "The docker-compose file not exists"
        exit 1
    fi
    ;;
prod)
    if [[ -e docker-compose.yml ]]; then
        log "PRODUCTION ENVIRONMENT"
        sudo docker compose -f docker-compose.yml up --build -d 2>&1 | tee -a "$LOG_FILE"
    else
        log "The docker-compose file not exists"
        exit 1
    fi
    ;;
esac

log "Deploy finalized: $(date)"
log "==========================================================="
