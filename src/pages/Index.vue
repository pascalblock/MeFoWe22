<template>
  <q-page>
    <quizCard
        v-for="quiz in availableQuizzes"
        :key="quiz.title"
        v-bind="quiz"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import quizCard from "components/QuizCard";

export default defineComponent({
    name: "home",

    components: {
        quizCard
    },

    data() {
        return {
            availableQuizzes: [
                {
                    imageLink: '../assets/quizImages/Maps.jpg',
                    title: 'WeltQuiz',
                    caption: 'Ein Quiz rund um die Welt',
                    userCount: '1550',
                    icon: 'public',
                    stars: 4,
                    id: 'abcde'
                },
                {
                    imageLink: '/img/Maps.jpg',
                    title: 'Städtequiz',
                    caption: 'Ein Quiz quer durch die interessantesten Städte der Welt',
                    userCount: '433',
                    icon: 'location_city',
                    stars: 5,
                    id: 'fghij'
                }
            ]
        }
    }

});
</script>
