<template>
  <button
    :class="[
      'font-medium cursor-pointer outline-none ',
      sizeClasses[size],
      variantClasses[variant],
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "outline"].includes(value),
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      sizeClasses: {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
      },
      variantClasses: {
        primary: "bg-none border-quinary border uppercase font-halenoir ",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 ",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 ",
      },
    };
  },
};
</script>
