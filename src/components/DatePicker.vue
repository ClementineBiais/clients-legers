<template>
    <input type="date">
</template>

<script>
export default {
  name: 'DatePicker',
    data: () => ({
        showPicker: false,
        selectedDate: null,
    })
}
</script>