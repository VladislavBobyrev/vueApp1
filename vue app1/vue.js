// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      isActive: true,
      steps: [
        {title: 'Основы', text: 'Git — это набор консольных утилит, которые отслеживают и фиксируют изменения в файлах (чаще всего речь идет об исходном коде программ, но вы можете использовать его для любых файлов на ваш вкус). С его помощью вы можете откатиться на более старую версию вашего проекта, сравнивать, анализировать, сливать изменения и многое другое. Этот процесс называется контролем версий. Существуют различные системы для контроля версий. Вы, возможно, о них слышали: SVN, Mercurial, Perforce, CVS, Bitkeeper и другие.'},
        {title: 'Установка', text: 'Windows — мы рекомендуем git for windows, так как он содержит и клиент с графическим интерфейсом, и эмулятор bash.'},
        {title: 'Настройка', text: 'Итак, мы установили git, теперь нужно добавить немного настроек. Есть довольно много опций, с которыми можно играть, но мы настроим самые важные: наше имя пользователя и адрес электронной почты. Откройте терминал и запустите команды:git config --global user.name "My Name" git config --global user.email myEmail@example.com'},
        {title: 'Создание нового репозитория', text: 'Как мы отметили ранее, git хранит свои файлы и историю прямо в папке проекта. Чтобы создать новый репозиторий, нам нужно открыть терминал, зайти в папку нашего проекта и выполнить команду init. Это включит приложение в этой конкретной папке и создаст скрытую директорию .git, где будет храниться история репозитория и настройки. Создайте на рабочем столе папку под названием git_exercise. Для этого в окне терминала введите $ git init'},
        {title: 'Определение состояния', text: 'status — это еще одна важнейшая команда, которая показывает информацию о текущем состоянии репозитория: актуальна ли информация на нём, нет ли чего-то нового, что поменялось, и так далее. Запуск git status на нашем свежесозданном репозитории должен выдать $ git status On branch master Initial commit'},
        {title: 'Подготовка файлов', text: 'В git есть концепция области подготовленных файлов. Можно представить ее как холст, на который наносят изменения, которые нужны в коммите. Сперва он пустой, но затем мы добавляем на него файлы (или части файлов, или даже одиночные строчки) командой add и, наконец, коммитим все нужное в репозиторий (создаем слепок нужного нам состояния) командой commit. $ git add'},
        {title: 'Коммит(фиксация изменений)', text: 'Чтобы зафиксировать изменения, нам нужно хотя бы одно изменение в области подготовки (мы только что создали его при помощи git add), после которого мы может коммитить $ git commit -m "Initial commit."'},
      ]
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex !== 0) this.activeIndex--
      console.log(this.activeIndex);
    },
    reset() {
      // начать заново
      this.activeIndex = 0
      this.isActive = true
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      if (this.activeIndex !== this.steps.length - 1)
      {
        this.activeIndex++
        console.log(this.activeIndex)
      } else
      {
        this.isActive = false
        console.log(this.activeIndex)
      }
  
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    isActiveStep()
    {
      return this.steps[this.activeIndex]
    },
    // 2. выключена ли кнопка назад
    prevDisabled()
    {
      return this.activeIndex === 0
    },
    // 3. находимся ли мы на последнем шаге
    isLastStep()
    {
      return this.activeIndex === this.steps.length -1
    }
  }
}

Vue.createApp(App).mount('#app')