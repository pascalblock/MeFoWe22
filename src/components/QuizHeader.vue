<template>
    <div class="mefo-quiz-header row">
        <div class="row">
            <p>{{ $t('quizFrame.question') }}</p>
            <p> 1/10</p>
        </div>

        <div>
            Fraaaage
        </div>
    </div>
</template>

<script>
export default {
    name: "QuizHeader"
}
</script>

<style lang="scss" scoped>

.mefo-quiz-header{
    height: 3rem;

    text-align: center;
}

</style>
