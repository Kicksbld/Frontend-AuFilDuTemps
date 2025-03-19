<template>
<component
  :is="component"
  :class="[
      variantClasses[variant],
      themeClasses[theme],
      weightClasses[weight],
      fontClasses[font]
    ]"
>
  <slot></slot>
</component>
</template>

<script>
export default {
    props: {
    variant: {
      type: String,
      default: 'body-base',
      validator: (value) => ['display', 'h1', 'h2', 'h3', 'h4', 'bodymd', 'bodysmall', 'bodybase'].includes(value)
    },
    theme: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tercery', 'error', 'success'].includes(value)
    },
    font: {
      type: String,
      default: 'halenoir',
      validator: (value) => ['halenoir', 'scholar', 'flaemische'].includes(value)
    },
    weight: {
      type: String,
      default: 'medium',
      validator: (value) => ['light', 'medium', 'bold'].includes(value)
    },
    component: {
      type: String,
      default: 'p',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(value)
    }
  },

  data() {
    return {
      weightClasses: {
        light: 'font-light',
        medium: 'font-medium',
        bold: 'font-bold'
      },
      themeClasses: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tercery: 'text-tercery',
        quaternary: 'text-quaternary',
        quinary: 'text-quinary',
        error: 'text-error',
        success: 'text-success'
      },
      variantClasses: {
        display: 'text-4xl',
        h1: 'text-3xl' ,
        h2: 'text-2xl',
        h3: 'text-xl',
        h4: 'text-lg',
        bodymd: 'text-md',
        bodysmall: 'text-sm',
        bodybase: 'text-base'
      },
      fontClasses: {
        haleanoir: 'font-haleanoir',
        scholar: "font-scholar",
        flaemische: "font-flaemische"
      }
    };
  }
};
</script>