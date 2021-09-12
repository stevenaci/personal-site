<template>
  <div class="github">
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
      <td class="hdr">Projects</td>

      </tr>
      <tr>
        <table>
          <tr
            :class="repos"
            v-for="r in repos_sorted"
            :key="r.url"
            v-on:mouseover="display_repo = r"
          >
          <td>
              <button class="repobtn highlight_rollover" v-on:click="go_to(r.html_url)">
              {{ r.name }}
              {{r.language}}
            </button>
          </td>

          </tr>
      <tr>
      </tr>
      <tr class="hdr">

      </tr>

      <tr>
      </tr>
  
        </table>   

  <td class="noborder">

  <tr>
    <td>
    </td>
            <td>Details</td>
    </tr>
      <tr>

        <td>Description:</td>
        <td class="desc">
        {{ display_repo.description }}
        {{ errormsg }}
        </td>
      </tr>
      
      <tr>
        <td>Language:</td>

        <td>{{ display_repo.language }}</td>
      </tr>
  </td>

      </tr>
    </table>

    <tr>      </tr>

  </div>
</template>

<script>
export default {
  name: "Github",
  components: {},
  props: {
    msg: String,
  },
  data: function () {
    return {
      repos:null,
      errormsg:"",
      user: {
        avatar_url: null,
        location: null,
        updated_at: undefined,
        public_repos: undefined,
      },
      display_repo: {
        name: undefined,
        description: "< Hover a project to display >",
      }
    };
  },
  computed: {
    userdata: function () {
      return this.$store.getters.github_user;
    },
    repos_sorted: function () {
      return this.$store.getters.repos;
    },
    displayreponame: function () {
      return this.display_repo.name;
    },
    displayrepodesc: function () {
      return this.display_repo.description;
    },
  },
  async beforeMount() {
      this.$store.commit('update_github')
      if (this.repos_sorted == null)
        this.errormsg = "github api failed"
  },
  methods: {
    format_timestamp: function (timestamp) {
      if (timestamp != undefined) {
        return new Date(timestamp).toString().substring(0, 23);
      }
    },
    go_to: function (url) {
      window.location.href = url;
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.github {

  height: auto;

}

.avatar {
  width: 95px;
}

.repos{
  text-align:left;
}

.desc {
  width:300px;
  height:100px;
}
.selected{
  border: 2x solid var(--drk-ceru);
  border-color:blue;
}
.spacer{
  height:30px;
}
a {
  color: #42b983;
}
</style>
