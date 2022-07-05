<template>
  <div class="text-danger">URL NOT FOUND</div>
</template>
<script>
export default {
  name: "error-page",
};
</script>
<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  .rate {
    color: gray;
    font-weight: 600;
  }
}

.genre {
  border: 2px solid gray;
  border-radius: 50px;
  padding: 0.5rem 1em;
  font-size: 12px;
}
.gap {
  gap: 1rem;
}
.gap-10 {
  gap: 10rem !important;
}
.detail {
  margin-top: 2rem;
  td {
    padding: 0.5rem;
  }
  .tag {
    margin-right: 1rem;
  }
  .value {
    color: gray;
    font-weight: 500;
  }
}

.box {
  text-align: center;
}
</style>
