<template>
  <div>

    <table>
      <thead>
        <tr>
          <th>Recette</th>
          <th>Tags</th>
          <th>Mise à jour</th>
        </tr>
      </thead>

      <tr v-for="page in $site.pages.slice(1)">
        <td><a :href="page.relativePath.slice(0, -3)">{{ page.title }}</a></td>
        <td>
          <div v-if="page.frontmatter.meta" v-for="meta in page.frontmatter.meta">
            <span v-if="meta.name == 'keywords'" v-for="key in meta.content.split(',')" >
              <Badge :text="key" type="info"/>
            </span>
        </div>
      </td>
        <td>
          <small><em>{{ page.lastUpdated }}</em></small>
        </td>

      </tr>

    </table>


  </div>
</template>

<style>

</style>

<script>

</script>
