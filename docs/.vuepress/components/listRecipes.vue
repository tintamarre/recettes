<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Recettes</th>
          <th>Tags</th>
          <th>Dernière mise à jour</th>
        </tr>
      </thead>

      <tr v-for="page in $site.pages" v-if="page.title != 'Home'" >
        <td>
            <div v-if="page.frontmatter.meta" v-for="meta in page.frontmatter.meta">

            <span v-if="meta.name == 'status'">
              <Badge :text="meta.content" type="warning" v-if="meta.content == 'draft'" />
              <Badge :text="meta.content" type="tip" v-if="meta.content == 'published'" />
            </span>

          </div>


        </td>
        <td>
          <a :href="page.relativePath.slice(0, -3)">{{ page.title }}</a>

          <div v-if="page.frontmatter.meta" v-for="meta in page.frontmatter.meta">

            <em>
              <small v-if="meta.name == 'description'">
                {{ meta.content }}
              </small>
            </em>
          </div>

        </td>
        <td>
          <div v-if="page.frontmatter.meta" v-for="meta in page.frontmatter.meta">

            <span v-if="meta.name == 'keywords'">
              <Badge :text="key" type="info" v-for="key in meta.content.split(',')" />
            </span>

          </div>
        </td>
        <td>
          <small>
            <em>{{ page.lastUpdated }}</em>
          </small>
        </td>

      </tr>
    </table>
  </div>
</template>

<style>

</style>

<script>

</script>
