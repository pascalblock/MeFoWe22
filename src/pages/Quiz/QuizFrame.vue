<template>
<q-page>
    <quizHeader />

    <Map />

    <q-page-sticky class="mefo-back-button" position="bottom-left" :offset="[18, 56]">
        <q-btn round color="primary" icon="arrow_back" :to="{ name: 'StartQuiz'}" />
    </q-page-sticky>

    <helpOptions />
    <quizFooter />
</q-page>
</template>

<script>
import quizHeader from "components/QuizHeader";
import quizFooter from "components/QuizFooter";
import helpOptions from "components/HelpOptions";
import Map from "components/Map"

export default {
    name: "QuizFrame",

    components: {
        quizHeader,
        quizFooter,
        helpOptions,
        Map
    }
}
</script>

<style lang="scss">
.mefo-back-button{
    z-index: 1000;
}

</style>
