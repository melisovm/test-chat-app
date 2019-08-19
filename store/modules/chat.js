const state = {
  conversations: [
    {
      id: 1,
      subject: 'Простой запрос',
      created: '2019-08-01 23:59',
      parts: [
        {
          id: 1,
          author: 'vasya',
          text: 'Привет, как дела?',
          created: '2019-08-01 23:59',
        },
        {
          id: 2,
          author: 'petya',
          created: '2019-08-02 01:20',
          text: 'Привет, все хорошо, спасибо!',
        },
        {
          id: 3,
          author: 'petya',
          created: '2019-08-02 05:20',
          text: 'А у тебя?',
        },
      ],
    },
    {
      id: 2,
      subject: 'Вопрос по домену',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          author: 'petr',
          created: '2019-08-06 12:20',
          text: 'Здравствуйте, тут есть кто-нибудь?',
        },
        {
          id: 2,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Да, я вас слушаю!',
        },
        {
          id: 3,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Помогите мне настроить домен!',
        },
      ],
    },
  ],
  sendingState: ''
};
const getters = {
  getChatData: state => {
    return state.conversations.map(person => {
      const { parts, ...chatInfo } = person;
      return chatInfo;
    });
  },
  getLastMessageById: state => id => {
    const person = state.conversations.find(person => person.id === id);
    const { parts: chat } = person;
    const { text: lastMessage } = chat[chat.length - 1];
    return lastMessage;
  },
  getMessagesById: state => id => {
    const person = state.conversations.find(person => person.id === id);
    const { parts: chat } = person;
    return chat;
  },
  getFirstMessageOwner: state => id => {
    const person = state.conversations.find(person => person.id === id);
    const { parts: chat } = person;
    const { author } = chat[0];
    return author;
  },

};
const actions = {
  sendMessage({ commit, dispatch, getters }, { chatId, message, created }) {
    dispatch('changeSendingState', 'LOADING');
    setTimeout(() => {
      commit('SEND_MESSAGE', {
        chatId,
        message,
        getters,
        created
      });
      dispatch('changeSendingState', 'SUCCESS');
    }, 1000);
  },
  changeSendingState({ commit }, sendingState) {
    commit('CHANGE_SENDING_STATE', sendingState);
  }
};
const mutations = {
  SEND_MESSAGE(state, { chatId, message, getters, created }) {
    const { parts: chat } = state.conversations.find(conversation => conversation.id === parseInt(chatId));
    const firstUser = getters.getFirstMessageOwner(parseInt(chatId));
    const { author: secondUser } = chat.find(message => message.author !== firstUser);
    const payload = {
      id: chat.length + 1,
      text: message,
      author: secondUser,
      created
    };
    chat.push(payload);
  },
  CHANGE_SENDING_STATE(state, sendingState) {
    state.sendingState = sendingState;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
