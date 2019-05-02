window.onload = () => {

    for (let i = 0; i < cards.length; i++) {
        let template = '<div class="bank-card block-type-' + (i + 1) + '">';
        template += '<div class="card-logo"><img src="' + cards[i].src + '" /></div>';
        template += '<div class="card-content"><h3>' + cards[i].title + '</h3>';
        template += '<div class="card-info">' + cards[i].content + '</div>';
        template += '<div><a href="' + cards[i].readMore + '">'
        template += '<button class="read-more">Подробные условия</button></a></div></div></div></div>'
        document.getElementById('bank-cards').innerHTML += template;
    }

    document.getElementById('show-blocks').addEventListener('click', () => {
        const elem = document.getElementById('show-blocks');
        elem.innerHTML = "Банки с менее выгодными условиями";
        elem.setAttribute('class', '');
        for (let i = 0; i < cards2.length; i++) {
            let template = '<div class="bank-card block-less-' + (i + 1) + '">';
            template += '<div class="card-logo"><img src="' + cards2[i].src + '" /></div>';
            template += '<div class="card-content"><h3>' + cards2[i].title + '</h3>';
            template += '<div class="card-info">' + cards2[i].content + '</div>';
            template += '<div><a href="' + cards2[i].readMore + '">'
            template += '<button class="read-more">Подробные условия</button></a></div></div></div></div>';
            document.getElementById('bank-cards-less').innerHTML += template;

            cards2.forEach(function callback(currentValue, i, array) {
                var check = 0;

                if (cards2[i].cardSms == sms)
                    check++;
                else if (sms == "Не важно")
                    check++;

                if (cards2[i].cardInet == inet)
                    check++;
                else if (inet == "Не важно")
                    check++;

                if (cards2[i].cardMobile == mobile)
                    check++;
                else if (mobile == "Не важно")
                    check++;

                if (cards2[i].cardRate == rate)
                    check++;
                else if (rate == "Не важно")
                    check++;

                if (count == "Не важно") {
                    check++;
                }
                else {
                    if (count == "До 100 шт.") {
                        if (cards2[i].cardCount == count || cards2[i].cardCount == "До 10 шт.") {
                            check++;
                        }
                    }
                    else if (cards2[i].cardCount == count) {
                        check++;
                    }
                }

                if (money == "Не важно") {
                    check++;
                }
                else {
                    if (money == "До 1 000 000 р.") {
                        if (cards2[i].cardMoney == money || cards2[i].cardMoney == "До 100 000 р." || cards2[i].cardMoney == "До 10 000 р.") {
                            check++;
                        }
                    }
                    else if (money == "До 100 000 р.") {
                        if (cards2[i].cardMoney == money || cards2[i].cardMoney == "До 10 000 р.") {
                            check++;
                        }
                    }
                    else if (cards2[i].cardMoney == money) {
                        check++;
                    };
                }

                if (check > 3)
                    $('.block-less-' + (i + 1)).css({ display: 'flex' });
                else {
                    $('.block-less-' + (i + 1)).css({ display: 'none' });
                }
            });
        }
    })
}

$('.btn').click(function () {
    $(this).siblings().removeClass('btn-primary');
    $(this).siblings().addClass('btn-outline-primary');
    $(this).addClass('btn-primary');
    $(this).siblings().css({ color: '#007bff' });
    $(this).css({ color: 'white' });
});

// cards array
// Здесь нужно добавить линки для "подробнее условия"
const cards = [
    {
        name: 'Точка',
        title: 'Расчётный счёт в банке Точка',
        content: '<p>Открытие счета: 0 рублей;</p><p>Обслуживание: от 0 р/мес.;</p><p>Много бонусов!</p>',
        src: '../bank-logo/tochka.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 100 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 10 шт.',
        readMore: "https://vk.com"
    },

    {
        name: 'Модульбанк',
        title: 'Расчётный счёт в Модульбанке',
        content: '<p>Открытие счета: 0 рублей;</p><p>Обслуживание: от 0 рублей;</p><p>Бесплатное снятие наличных!</p>',
        src: '../bank-logo/modulbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Тинькофф',
        title: 'Расчётный счёт в банке Тинькофф',
        content: '<p>Открытие счета — бесплатно;</p><p>Обслуживание от 490 р/мес;</p><p>Возврат до 6% на остаток по счету.</p>',
        src: '../bank-logo/tinkof.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 10 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 10 шт.',
    },

    {
        name: 'Сфера (БКС)',
        title: 'Расчетный счет в банке Сфера (БКС)',
        content: '<p>Открытие счета — 0 руб.</p><p>Обслуживание — от 0 руб./мес.</p><p>Резервирование за 15 минут.</p>',
        src: '../bank-logo/sfera.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'От 100 шт.',
    },

    {
        name: 'УБРиР',
        title: 'Расчётный счёт в банке УБРиР',
        content: '<p>Открытие счета: от 0 рублей;</p><p>Обслуживание: от 0 р/мес;</p><p>Платежки от 25 р./шт.</p>',
        src: '../bank-logo/ubrir.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Локо-Банк',
        title: 'Расчетный счет в Локо-Банке',
        content: '<p>Открытие счета — Бесплатно;</p><p>Обслуживание от 0 руб./мес.;</p><p>Быстрое открытие счета.</p>',
        src: '../bank-logo/lokobank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Эксперт Банк',
        title: 'Расчетный счет в Эксперт Банке',
        content: '<p>Открытие счета — Бесплатно;</p><p>Обслуживание от 0 руб/мес;</p><p>До 5% на остаток по счету.</p>',
        src: '../bank-logo/expertbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Открытие',
        title: 'Расчётный счёт в банке Открытие',
        content: '<p>Бесплатное открытие счета;</p><p>Обслуживание счета: от 0 р./мес;</p><p>Платежи от 15 р/шт.;</p>',
        src: '../bank-logo/otkritie.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Сбербанк',
        title: 'Расчетный счет в Сбербанке',
        content: '<p>Открытие бесплатно;</p><p>Обслуживание от 0 р/мес.;</p><p>Надежность!</p>',
        src: '../bank-logo/sberbank-2.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Альфа-Банк',
        title: 'Расчётный счёт в Альфа-Банке',
        content: '<p>Обслуживание: от 490 р/мес;</p><p>Снятие наличных с р/с карты;</p><p>Открытие за 1 встречу.</p>',
        src: '../bank-logo/alfabank-2.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Промсвязьбанк',
        title: 'Расчётный счёт в Промсвязьбанке',
        content: '<p>Открытие счета: 0 рублей;</p><p>Обслуживание: от 0 р./мес;</p><p>Бесплатных платежек от 3 шт./мес.</p>',
        src: '../bank-logo/promsvyazbank-2.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'ДелоБанк (СКБ)',
        title: 'Расчётный счёт в ДелоБанке (СКБ)',
        content: '<p>Бесплатное открытие счета;</p><p>Обслуживание от 0 руб/мес;</p><p>Бесплатная корпоративная карта.</p>',
        src: '../bank-logo/delobank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Райффайзенбанк',
        title: 'Расчетный счет в Райффайзенбанке',
        content: '<p>Открытие: от 0 рублей;</p><p>Обслуживание: от 790 р;</p><p>Платежка 25 р./шт.</p>',
        src: '../bank-logo/rayffayzenbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Совкомбанк',
        title: 'Расчётный счёт в Совкомбанке',
        content: '<p>Бесплатное открытие счета;</p><p>Обслуживание от 0 р./мес.;</p><p>Платежки от 15 до 50 р./шт.</p>',
        src: '../bank-logo/sovkombank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Восточный',
        title: 'Расчетный счет в Восточном банке',
        content: '<p>Открытие счета бесплатно;</p><p>Обслуживание от 490 р./мес;</p><p>Платежки — от 3 бесплатно.</p>',
        src: '../bank-logo/vostochniy.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'ВТБ',
        title: 'Расчетный счет в банке ВТБ',
        content: '<p>Открытие счета 0 р.;</p><p>Обслуживание от 1 200 р/мес.;</p><p>Бесплатных платежек от 5 шт/мес.</p>',
        src: '../bank-logo/vtb.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },
];

// Здесь нужно добавить линки для "подробнее условия"
const cards2 = [
    {
        name: 'Форбанк',
        title: 'Расчетный счет в Форбанке',
        content: '<p>Открытие счета — 0 р.;</p><p>Обслуживание — от 0 р./мес.;</p><p>Платежка от 35 р./шт.</p>',
        src: '../bank-logo/forbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
        readMore: "https://yandex.ru"
    },

    {
        name: 'Веста',
        title: 'Расчетный счет в Веста Банке',
        content: '<p>Открытие счета бесплатно;</p><p>Обслуживание счета — от 0 р./мес;</p><p>Без бюрократии и лишних комиссий!</p>',
        src: '../bank-logo/vest.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'РосЕвроБанк',
        title: 'Расчетный счет в РосЕвроБанке',
        content: '<p>Открытие счета бесплатно;</p><p>Обслуживание от 0 р./мес;</p><p>Платежки от 15 р.шт.</p>',
        src: '../bank-logo/rosevrobank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Бинбанк',
        title: 'Расчётный счёт в Бинбанке',
        content: '<p>Открытие счета от 0 р.;</p><p>Обслуживание от 1170 р/мес.;</p><p>Гибкие пакеты услуг.</p>',
        src: '../bank-logo/binbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Авангард',
        title: 'Расчётный счёт в банке Авангард',
        content: '<p>Открытие счета: от 1000 рублей;</p><p>Обслуживание: от 500 рублей;</p><p>Эксклюзив — «Карта с дисплеем»</p>',
        src: '../bank-logo/avangard.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Росбанк',
        title: 'Расчётный счёт в Росбанке',
        content: '<p>Открытие счета — 1500 р.;</p><p>Обслуживание — от 790 р./мес;</p><p>Клиент-банк.</p>',
        src: '../bank-logo/rosbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Уралсиб Банк',
        title: 'Расчетный счет в Уралсиб Банке',
        content: '<p>Открытие счета — 0 р;</p><p>Обслуживание от 480 р/мес;</p><p>Платежное поручение от 10 р.</p>',
        src: '../bank-logo/uralsib.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Газпромбанк',
        title: 'Расчетный счет в Газпромбанке',
        content: '<p>Открытие счета — 3000 р.;</p><p>Обслуживание — от 600 р./мес;</p><p>Платежное поручение — 32 р./шт.</p>',
        src: '../bank-logo/gazprombank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Европа',
        title: 'Расчетный счет в Кредит Европа Банке',
        content: '<p>Открытие счета — 0 р.;</p><p>Обслуживание счета 490 — 3990 р./мес;</p><p>Стоимость платежки 25 — 45 р./шт.</p>',
        src: '../bank-logo/evropa.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Возрождение',
        title: 'Расчетный счет в банке Возрождение',
        content: '<p>Открытие счета 0 р.;</p><p>Обслуживание от 600 р./мес;</p><p>Платежки от 20 р./шт.</p>',
        src: '../bank-logo/vozrojdenie.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'МТС',
        title: 'Расчетный счет в МТС Банке',
        content: '<p>Открытие счета — 0 руб.;</p><p>Ведение счета 1000 — 1 800 руб/мес;</p><p>Выдача наличных. 0,5 — 10%.</p>',
        src: '../bank-logo/mtc.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Связь',
        title: 'Расчетный счет в Связь-Банке',
        content: '<p>Открытие счета бесплатно;</p><p>Обслуживание от 490 р./мес;</p><p>Платежки от 20 р./шт.</p>',
        src: '../bank-logo/svyaz.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'МКБ',
        title: 'Расчетный счет в банке МКБ',
        content: '<p>Открытие счета 1200 р.;</p><p>Обслуживание от 1990 р./мес;</p><p>Платежки от 14 р./шт.</p>',
        src: '../bank-logo/mkb.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'ББР',
        title: 'Расчетный счет в ББР Банке',
        content: '<p>Открытие счета 500 р.;</p><p>Обслуживание от 600 р./мес.;</p><p>Платежка 25 р./шт.</p>',
        src: '../bank-logo/bbr.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Россельхозбанк',
        title: 'Расчетный счет в Россельхозбанке',
        content: '<p>Открытие счета — 2000 р;</p><p>Ведение счета — от 750 р/мес;</p><p>Выдача наличных — 1,2% от суммы.</p>',
        src: '../bank-logo/rosselxozbank.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'ЮниКредит',
        title: 'Расчётный счёт в ЮниКредит банке',
        content: '<p>Открытие счета — 1200 р.;</p><p>Обслуживание счета — от 1000 р./мес.</p>',
        src: '../bank-logo/unicredit.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'ОТП',
        title: 'Расчетный счет в ОТП Банке',
        content: '<p>Открытие счета — 0 руб;</p><p>Обслуживание — от 1800 руб/мес;</p><p>10% скидка при оплате за 3 месяца.</p>',
        src: '../bank-logo/otp.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Стандарт',
        title: 'Расчетный счет в Русском Стандарте',
        content: '<p>Открытие счета 2000 р.;</p><p>Обслуживание от 800 р/мес;</p><p>Платежка 30 р/шт.</p>',
        src: '../bank-logo/russtandart.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'РНКБ',
        title: 'Расчетный счет в банке РНКБ',
        content: '<p>Открытие счета бесплатно;</p><p>Ведение счета от 0 руб./мес;</p><p>Платежки от 25 руб./шт.</p>',
        src: '../bank-logo/rnkb.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Быстробанк',
        title: 'Расчетный счет в Быстробанке',
        content: '<p>Открытие счета 3500 р. (дорого);</p><p>Обслуживание от 600 р./мес;</p><p>Заказ выписки платно.</p>',
        src: '../bank-logo/bistro.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },

    {
        name: 'Зенит',
        title: 'Расчетный счет в банке Зенит',
        content: '<p>Открытие счета бесплатно;</p><p>Обслуживание от 490 р./мес;</p><p>Платежки 50 р./шт.</p>',
        src: '../bank-logo/zenit.png',
        cardInet: 'Да',
        cardMobile: 'Да',
        cardMoney: 'До 1 000 000 р.',
        cardSms: 'Да',
        cardRate: 'Да',
        cardCount: 'До 100 шт.',
    },
];

////Filter

var money = $('option:selected', '#sel1').text();

$('#sel1').change(function () {
    money = $('option:selected', this).text();
});

var count = $('option:selected', '#sel2').text();

$('#sel2').change(function () {
    count = $('option:selected', this).text();
});

var inet = $('#inetBtns .btn-primary').text();

$('#inetBtns button').click(function () {
    inet = $(this).text();
});

var sms = $('#smsBtns .btn-primary').text();

$('#smsBtns button').click(function () {
    sms = $(this).text();
});

var mobile = $('#mobileBtns .btn-primary').text();

$('#mobileBtns button').click(function () {
    mobile = $(this).text();
});

var rate = $('#rateBtns .btn-primary').text();

$('#rateBtns button').click(function () {
    rate = $(this).text();
});

function checkingFilter() {

    cards.forEach(function callback(currentValue, i, array) {
        var check = 0;

        if (cards[i].cardSms == sms)
            check++;
        else if (sms == "Не важно")
            check++;

        if (cards[i].cardInet == inet)
            check++;
        else if (inet == "Не важно")
            check++;

        if (cards[i].cardMobile == mobile)
            check++;
        else if (mobile == "Не важно")
            check++;

        if (cards[i].cardRate == rate)
            check++;
        else if (rate == "Не важно")
            check++;

        if (count == "Не важно") {
            check++;
        }
        else {
            if (count == "До 100 шт.") {
                if (cards[i].cardCount == count || cards[i].cardCount == "До 10 шт.") {
                    check++;
                }
            }
            else if (cards[i].cardCount == count) {
                check++;
            }
        }

        if (money == "Не важно") {
            check++;
        }
        else {
            if (money == "До 1 000 000 р.") {
                if (cards[i].cardMoney == money || cards[i].cardMoney == "До 100 000 р." || cards[i].cardMoney == "До 10 000 р.") {
                    check++;
                }
            }
            else if (money == "До 100 000 р.") {
                if (cards[i].cardMoney == money || cards[i].cardMoney == "До 10 000 р.") {
                    check++;
                }
            }
            else if (cards[i].cardMoney == money) {
                check++;
            };
        }

        if (check > 3)
            $('.block-type-' + (i + 1)).css({ display: 'flex' });
        else {
            $('.block-type-' + (i + 1)).css({ display: 'none' });
        }
    });

    cards2.forEach(function callback(currentValue, i, array) {
        var check = 0;

        if (cards2[i].cardSms == sms)
            check++;
        else if (sms == "Не важно")
            check++;

        if (cards2[i].cardInet == inet)
            check++;
        else if (inet == "Не важно")
            check++;

        if (cards2[i].cardMobile == mobile)
            check++;
        else if (mobile == "Не важно")
            check++;

        if (cards2[i].cardRate == rate)
            check++;
        else if (rate == "Не важно")
            check++;

        if (count == "Не важно") {
            check++;
        }
        else {
            if (count == "До 100 шт.") {
                if (cards2[i].cardCount == count || cards2[i].cardCount == "До 10 шт.") {
                    check++;
                }
            }
            else if (cards2[i].cardCount == count) {
                check++;
            }
        }

        if (money == "Не важно") {
            check++;
        }
        else {
            if (money == "До 1 000 000 р.") {
                if (cards2[i].cardMoney == money || cards2[i].cardMoney == "До 100 000 р." || cards2[i].cardMoney == "До 10 000 р.") {
                    check++;
                }
            }
            else if (money == "До 100 000 р.") {
                if (cards2[i].cardMoney == money || cards2[i].cardMoney == "До 10 000 р.") {
                    check++;
                }
            }
            else if (cards2[i].cardMoney == money) {
                check++;
            };
        }

        if (check > 3)
            $('.block-less-' + (i + 1)).css({ display: 'flex' });
        else {
            $('.block-less-' + (i + 1)).css({ display: 'none' });
        }
    });
}



$('.btn-filter').click(function () {
    checkingFilter();
});
