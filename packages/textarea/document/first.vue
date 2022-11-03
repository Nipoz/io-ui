<io-textarea v-model="input" placeholder="come in" :maxlength=1000></io-textarea>

<script setup>
    import { ref } from "vue";
    let input = ref("");
</script>