<template>
  <button
    :class="[
      'font-medium cursor-pointer outline-none ',
      sizeClasses[size],
      variantClasses[variant],
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    :type="buttonType"
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
    buttonType: {
      type: String,
      default: "button",
    }
  },

  data() {
    return {
      sizeClasses: {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-2xl",
      },
      variantClasses: {
        primary: "bg-none border-quinary border uppercase font-scholar ",
        secondary: "bg-none linear-bg border-gold border uppercase font-scholar text-gold bg-primary ",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 ",
      },
    };
  },
};
</script>
