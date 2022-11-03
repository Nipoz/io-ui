<io-textarea v-model="input" showNumberLimit isAutosize :maxlength=1000></io-textarea>

<script setup>
    import { ref } from "vue";
    let input = ref("");
</script>