<template>
  <div class="github">
    <li>
    <table>
      <!-- <tr>
        <td>
          <button class="highlight" v-on:click="update_user(username)"> refresh </button>
          <input type="text" v-model="username" />
        </td>
      </tr> -->
      <tr>

        </tr>
      <tr>
        <td>
          <img class="avatar" :src="userdata.avatar_url" />
        </td>
        <td>
          <table>
            <tr>
              <td>User:</td>
              <td>
                {{ userdata.login }}
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                {{ userdata.name }}
              </td>
            </tr>
            <tr>
              <td>Location: </td>
              <td>
                {{ userdata.location }}
              </td>
            </tr>
            <tr>
              <td>Public Repos:</td>
              <td>
                {{ userdata.public_repos }}
              </td>
            </tr>

            <tr>
              <td>Last Update:</td>
              <td>
                {{ format_timestamp(userdata.updated_at) }}
              </td>
            </tr>
            <tr></tr>            
          </table>
        </td>
      </tr>
      <tr class="spacer">
  </tr>
      <tr>
        <td class="hdr">Repos</td>
        <td>
          {{ display_repo.name }}
        </td>
      </tr>

      <tr>
        <td>
          <div
            class="repos"
            v-for="r in repos_sorted.op"
            :key="r.url"
            v-on:mouseover="display_repo = r"
          >
            <button class="repobtn highlight" v-on:click="go_to(r.html_url)">
              {{ r.name }}
            </button>

          </div>
        </td>
        <td id="repodesc">
          {{ display_repo.description }}
        </td>
      </tr>
      <tr class="hdr">
        <td>Forks and Contributions:</td>
      </tr>
      <tr>
        <td>
          <div
            class="repos"
            v-for="r in repos_sorted.forked"
            :key="r.url"
            v-on:mouseover="display_repo = r"
          >
            <button class="repobtn highlight" v-on:click="go_to(r.html_url)">
              {{ r.name }}
            </button>

          </div>
        </td>
      </tr>
<tr class="spacer">
  </tr>
      <tr>

      </tr>

    </table>
  
    </li>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Github",
  components: {},
  props: {
    msg: String,
  },
  data: function () {
    return {
      user: {
        avatar_url: null,
        location: null,
        updated_at: undefined,
        public_repos: undefined,
      },
      display_repo: {
        name: undefined,
        description: undefined,
      },
      repos: [],
      username: "stevenaci",
    };
  },
  computed: {
    userdata: function () {
      return this.user;
    },
    links: function () {
      return {
        user: "https://api.github.com/users/" + this.username,
        repos: "https://api.github.com/users/" + this.username + "/repos",
      };
    },
    repos_sorted: function () {
      var forked = this.repos.filter((x) => x.fork == true);
      var op = this.repos.filter((x) => x.fork == false);
      return {
        forked: forked,
        op: op,
      };
    },
    displayreponame: function () {
      return this.display_repo.name;
    },
    displayrepodesc: function () {
      return this.display_repo.description;
    },
  },
  async created() {
    this.update_user(this.username);
  },
  methods: {
    format_timestamp: function (timestamp) {
      if (timestamp != undefined) {
        return new Date(timestamp).toString().substring(0, 23);
      }
    },
    go_to: function (url) {
      window.location.href = url;
    },
    update_user: function (u) {
      this.username = u;
      axios.get(this.links.user).then((resp) => {
        this.user = resp.data;
      });
      axios.get(this.links.repos).then((resp) => {
        this.repos = resp.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.github {
  background-color: var(--pale-blu);

  height: auto;

}

.avatar {
  width: 95px;
}
.usrtbl {

  width: 100px;
}
.repos{
  text-align:left;
}
.hdr{
  
  border: 2x solid var(--drk-ceru);

}
#repodesc {
  width: 300px;
  overflow:scroll;
}
.spacer{
  height:30px;
}
a {
  color: #42b983;
}
</style>
