<template>
    <section class="authorization">
        <section class="authorization">
            <TitleSection
                :stile-title="stileTitle.stile"
                :header-visible="visibleAuthorization"
                :title="titleAuthorization"
            />
            <p class="error-authorization" :class="{ error_show: error }">
                *Неверный логин или пароль
            </p>
            <div class="controls">
                <input
                    v-model="login"
                    type="text"
                    placeholder="Логин / Email"
                    class="authorization__inp"
                />
                <input
                    v-model="password"
                    type="password"
                    placeholder="Пароль"
                    class="authorization__inp"
                />
                <router-link
                    style="text-decoration: none"
                    :to="{ name: 'recovery' }"
                >
                    <p>Забыли пароль?</p>
                </router-link>
            </div>
            <ButtonElement
                :modifiers="modifiers.btn"
                :title="titleAuthorizationBtn"
                @click="logIn"
            />
        </section>
        <!-- </form> -->
    </section>
</template>

<script>
import TitleSection from './TitleSection';
import ButtonElement from '@/components/unitComponents/CommonElements/ButtonElement';
import testMixin from '../../utils/methodsMixin.js';
import axios from 'axios';
export default {
    name: 'AuthorizationeSection',
    components: {
        ButtonElement,
        TitleSection,
    },
    mixins: [testMixin],
    data() {
        return {
            login: '',
            password: '',
            isAuth: Boolean,
            error: false,
            visibleAuthorization: true,
            titleAuthorization: 'Вход в личный кабинет',
            modifiers: {
                btn: ['width: 325px; height: 50px; margin: auto;'],
            },
            titleAuthorizationBtn: 'Войти',
            stileTitle: {
                stile: ['font-size: 22px'],
            },
        };
    },
    methods: {
        logIn() {
            axios
                .get('/user/logIn', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    auth: {
                        username: this.login,
                        password: this.password,
                    },
                })
                .then(() => {
                    localStorage.setItem('isAuth', true);
                    // Тут имя аккаунта
                    localStorage.setItem('accountName', '');
                    // Редиректим на главную
                    window.location.href = window.location.origin;
                })
                .catch(() => {
                    this.error = true;

                    setTimeout(() => {
                        this.error = false;
                    }, 4000);
                });
        },
    },
};
</script>

<style scoped>
p {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #3f7e77;
    cursor: pointer;
}
.authorization {
    width: 376px;
    background: #ffffff;
    border-radius: 20px;
    margin: auto;
    padding: 38px 25px 38px 25px;
}
.authorization__inp {
    width: 300px;
    font-size: 15px;
    font-size: 18px;
    line-height: 14px;
    color: #b1b1b1;
    margin-top: 20px;
    margin-top: 30px;
    outline: 0;
    background: transparent;
    line-height: 12px;
    color: #5c5c5c;
    text-align: left;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid #3f7e77;
    padding: 10px;
}
.error-authorization {
    color: red;
    text-align: center;
    opacity: 0;
    margin: 0;
    transition: opacity 1s;
}

.error_show {
    opacity: 1;
}

.error-windows {
    width: 340px;
    height: 77px;
    text-align: center;
    padding: 15px;
    border: 3px solid #3f7e77;
    background: #f8f5e6;
    border-radius: 10px;
    color: #3f7e77;
    position: absolute;
    left: 61%;
    top: 1%;
}
.controls {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
