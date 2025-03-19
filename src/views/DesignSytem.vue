<template>
  <div class="p-8 space-y-12">
    <!-- Typography Section -->
    <div>
      <h2 class="text-2xl font-bold mb-6">Typography System</h2>

      <!-- Display Variants -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-4">Display Variants</h3>
        <div class="space-y-4">
          <Typography variant="display" component="h1">Display Text (4xl)</Typography>
          <Typography variant="h1" component="h1">Heading 1 (3xl)</Typography>
          <Typography variant="h2" component="h2">Heading 2 (2xl)</Typography>
          <Typography variant="h3" component="h3">Heading 3 (xl)</Typography>
          <Typography variant="h4" component="h4">Heading 4 (lg)</Typography>
        </div>
      </div>

      <!-- Body Variants -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-4">Body Variants</h3>
        <div class="space-y-4">
          <Typography variant="bodymd">Body Medium Text</Typography>
          <Typography variant="bodybase">Body Base Text</Typography>
          <Typography variant="bodysmall">Body Small Text</Typography>
        </div>
      </div>

      <!-- Font Families -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-4">Font Families</h3>
        <div class="space-y-4">
          <Typography font="halenoir" variant="h3">Halenoir Font</Typography>
          <Typography font="scholar" variant="h3">Scholar Font</Typography>
          <Typography font="flaemische" variant="h3">Flaemische Font</Typography>
        </div>
      </div>

      <!-- Font Weights -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-4">Font Weights</h3>
        <div class="space-y-4">
          <Typography weight="light" variant="h3">Light Weight</Typography>
          <Typography weight="medium" variant="h3">Medium Weight</Typography>
          <Typography weight="bold" variant="h3">Bold Weight</Typography>
        </div>
      </div>

      <!-- Theme Colors -->
      <div class="mb-8">
        <h3 class="text-lg font-medium mb-4">Theme Colors</h3>
        <div class="space-y-4">
          <Typography theme="primary" variant="h3">Primary Color</Typography>
          <Typography theme="secondary" variant="h3">Secondary Color</Typography>
          <Typography theme="tercery" variant="h3">Tercery Color</Typography>
          <Typography theme="error" variant="h3">Error Color</Typography>
          <Typography theme="success" variant="h3">Success Color</Typography>
        </div>
      </div>

      <!-- Combined Examples -->
      <div>
        <h3 class="text-lg font-medium mb-4">Combined Examples</h3>
        <div class="space-y-4">
          <Typography 
            variant="h2" 
            theme="primary" 
            weight="bold" 
            font="halenoir"
          >
            Primary Bold Halenoir
          </Typography>
          <Typography 
            variant="bodymd" 
            theme="secondary" 
            weight="medium" 
            font="scholar"
          >
            Secondary Medium Scholar
          </Typography>
          <Typography 
            variant="bodysmall" 
            theme="tercery" 
            weight="light" 
            font="flaemische"
          >
            Tercery Light Flaemische
          </Typography>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from '../UI/design-system/Typography.vue'

export default {
  name: 'DesignSystem',
  components: {
    Typography
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>