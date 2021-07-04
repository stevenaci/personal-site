from git import Repo, Remote
import os

# Flags
JS_PROJ = 21 
REPO_UPTODATE = 4

PROJECT_TYPE = JS_PROJ

def update(remote):
    print("\n Updating git repo from remote origin:")
    remote.pull()
    print("\n Building project:")
    if PROJECT_TYPE == JS_PROJ:
        os.system("npm run build")


# Call this to check if repo needs to be updated, and update based on
# proj flags
def refresh_repo():
    # rorepo is a Repo instance pointing to the git-python repository.
    # For all you know, the first argument to Repo is a path to the repository
    # you want to work with
    repo = Repo(os.path.dirname(os.getcwd()))
    assert not repo.bare

    UPTODATE_FLAG = 4

    for remote in repo.remotes:
        if remote.fetch()[0].flags != UPTODATE_FLAG:
            update(remote)