<template>
    <div>
        <Typography variant="h2" font="scholar" theme="gold" component="h2">{{ label }}</Typography>
        <input 
            :id="id"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            required 
            :placeholder="placeholder"
            class="mt-1 text-scholar linear-bg block w-full px-4 py-3 border-2 focus:bg-primary border-gold rounded-md bg-primary text-[#756048] focus:outline-none" 
        />
    </div>
</template>

<script>
import Typography from './Typography.vue';

export default {
    name: 'CustomInput',
    components: {
        Typography,
    },
    props: {
        modelValue: {
            type: [String, Number],
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    emits: ['update:modelValue']
};
</script>

<style scoped></style>