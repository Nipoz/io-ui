<io-textarea v-model="input" showNumberLimit isAutosize :minRows=4 :maxRows=200 :maxlength=1000></io-textarea>

<script setup>
    import { ref } from "vue";
    let input = ref("");
</script>