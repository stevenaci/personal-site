# Run to auto deploy a project
# and itermiddently check git remote for updates
# params: 
import update
import sys
import time


if len(sys.argv) > 1:
    print("\nStarting auto-deployment, looping every {} minutes".format(int(sys.argv[1])))
    delay_seconds = int(sys.argv[1]) * 60
else:
    print("\nDidn't specify wait-time for auto deploy script, exiting...")
    exit()

while(1):
    update.refresh_repo()
    time.sleep(delay_seconds)

