FamilyTree.elements.customTextarea = function (data, editElement) {
    let id = FamilyTree.elements.generateId();
    let value = data[editElement.binding];
    console.log(value);
    

    if (!value) {
        return {html: ''};
    }

    return {
        html: `<label for='${id}'></label>
                <textarea
                    readonly
                    id='${id}'
                    name='${id}'
                    style="width: 100%; height: 100px; padding: 5px 10px; text-align: left;"
                    data-binding='${editElement.binding}'
                >${value}</textarea>`,
        id,
        value
    };
};

let family = new FamilyTree("#tree", {
    template: "hugo",
    nodeBinding: {
        field_0: "name",
        field_1: "age"
    },
    editForm: {
        titleBinding: 'name',
        photoBinding: 'ImgUrl',
        generateElementsFromFields: false,
        elements: [
            {type: 'textbox', label: 'Полное имя', binding: 'fullName'},
            {type: 'textbox', label: '', binding: 'dates'},
            {type: 'textbox', label: 'Возраст', binding: 'age'},
            {type: 'customTextarea', label: 'Описание', binding: 'desc'},
        ]
    }
});

const members = [
    { id: 0, pids: [], fullName: "Иван", gender: "male", desc: '' },
    { id: 1, pids: [3, 16], divorced: [3], fid: 0, fullName: "Фёдор Иванович Краснов", gender: "male",
        desc: 'Сирота с ~7 лет\nПриёмные родители увезли в Пермь\nВо взрослом возрасте потерял слух после драки' },
    { id: 2, pids: [], fid: 0, fullName: "Василий Иванович Краснов", gender: "male",
        desc: 'Старший брат\nСтроили с братом ГЭС у Владикавказа\nРаботал на Электроцинке' },
    { id: 3, pids: [1], divorced: [1], fullName: "...", gender: "female", desc: 'После развода уехала в Ростов-на-Дону' },
    { id: 4, pids: [], fullName: "Степан", gender: "male", desc: '' },
    { id: 5, pids: [], fid: 4, fullName: "Хачик Степанович", gender: "male", desc: '' },
    { id: 6, pids: [7], fid: 4, fullName: "Семён Степанович", gender: "male", desc: '' },
    { id: 7, pids: [6], fullName: "...", gender: "female", desc: '' },
    { id: 8, pids: [], fid: 6, mid: 7, fullName: "Мартин Семёнович", gender: "male", desc: '' },
    { id: 9, pids: [10], fid: 6, mid: 7, fullName: "Лена Семёновна", gender: "female", desc: '' },
    { id: 10, pids: [9], fullName: "Миран", gender: "male", desc: '' },
    { id: 11, pids: [], fid: 10, mid: 9, fullName: "Овик Миранович", gender: "male", desc: '' },
    { id: 12, pids: [], fid: 10, mid: 9, fullName: "Гаянэ Мирановна", gender: "female", desc: '' },
    { id: 13, pids: [], mid: 12, fullName: "Сероп", gender: "male", desc: '' },
    { id: 14, pids: [15], fid: 4, fullName: "Арусяк Степановна Акопова", gender: "female",
        desc: 'Родилась в Ахалкалаке\nУ мужа был кабак\nБрат мужа вывез из Грузии во время Геноцида' },
    { id: 15, pids: [14], fullName: "Мартирос Акопов", gender: "male", desc: '' },
    { id: 16, pids: [1], fid: 15, mid: 14, name: 'Сима', fullName: "Серафима (Сиран) Мартиросовна Акопова", gender: "female", desc: '' },
    { id: 17, pids: [], fid: 1, mid: 3, fullName: "Слава Фёдорович Арыкин", gender: "male", desc: 'Жил в Ростове на Красноармейской' },
    { id: 18, pids: [], fullName: "Георгий Хагагортян", gender: "male", desc: '' },
    { id: 19, pids: [], fid: 18, fullName: "Арменак Георгиeвич Хагагортян", gender: "male", desc: '' },
    { id: 20, pids: [], fid: 19, fullName: "Сергей Арменакович Хагагортян", gender: "male", desc: '' },
    
    { id: 21, pids: [22], fid: 19, fullName: "Георгий Арменакович Хагагортян", gender: "male", desc: '' },
    { id: 22, pids: [21], name: 'Полина', fullName: "Перель Аврамовна Бизи", gender: "female", desc: '' },
    { id: 23, pids: [24], fid: 21, mid: 22, fullName: "Гарик Георгиевич Хагагортян", gender: "male", desc: 'Свадьба в 1972' },
    { id: 24, pids: [23], fid: 1, mid: 16, name: 'Валя', fullName: 'Валентина Фёдоровна Краснова', gender: 'female', desc: '' },
    { id: 25, pids: [26], fullName: 'Тигран Липаритович Саргсян', gender: 'male', desc: '' },
    { id: 26, pids: [25], fid: 23, mid: 24, fullName: 'Гаянэ Гариковна Саргсян', gender: 'female', desc: '' },
    { id: 27, pids: [], fid: 25, mid: 26, fullName: 'Левон Тигранович Саргсян', gender: 'male', desc: '' },
    { id: 28, pids: [], fid: 25, mid: 26, fullName: 'Сона Тиграновна Саргсян', gender: 'female', desc: '' },
    { id: 29, pids: [30], fid: 23, mid: 24, name: 'Армен', fullName: 'Арменак Гарикович Хагагортян', gender: 'male', desc: '' },
    { id: 30, pids: [29], fullName: 'Лилит Джанибековна Хагагортян', gender: 'female', desc: '' },
    { id: 31, pids: [], fid: 29, mid: 30, fullName: 'Инга Арменаковна Хагагортян', gender: 'female', desc: '' },
    { id: 32, pids: [], fid: 29, mid: 30, fullName: 'Геворг Арменакович Хагагортян', gender: 'male', desc: '' },
    { id: 33, pids: [], fid: 29, mid: 30, fullName: 'Илона Арменаковна Хагагортян', gender: 'female', desc: '' },
    { id: 34, pids: [], fid: 29, mid: 30, fullName: 'Гегам Арменакович Хагагортян', gender: 'male', desc: '' },

    { id: 35, pids: [36], fid: 1, mid: 16, fullName: 'Ирина Фёдоровна Жарова', gender: 'female',
        desc: 'Работала на заводе до института\nС отцом переехали в Ростов из Орджоникидзе' },
    { id: 36, pids: [35], fullName: 'Эдуард Жаров', gender: 'male', desc: '' },
    { id: 37, pids: [38], fid: 36, mid: 35, fullName: 'Сергей Эдуардович Жаров', gender: 'male', desc: '' },
    { id: 38, pids: [37], fullName: 'Светлана', gender: 'female', desc: '' },
    { id: 39, pids: [], fid: 37, mid: 38, fullName: 'Арина Сергеевна Жарова', gender: 'female', desc: '' },
    { id: 40, pids: [], fid: 37, mid: 38, name: 'Саша', fullName: 'Александр Сергеевич Жаров', gender: 'male', desc: '' },
    
    { id: 41, pids: [42], fid: 15, mid: 14, fullName: "Соня Мартиросовна Акопова", gender: "female", desc: 'Жила в Грозном' },
    { id: 42, pids: [41], name: 'Семён', fullName: "Дядя Семён", gender: "male", desc: 'Маляр' },
    { id: 43, pids: [44], fid: 42, mid: 41, fullName: "Никита Семёнович", gender: "male", desc: '' },
    { id: 44, pids: [43], fullName: "Арусяк", gender: "female", desc: '' },
    // { id: 45, pids: [44], fid: 43, mid: 44, fullName: "Эдик Никитич", gender: "male", desc: '' },

    { id: 46, pids: [47], fid: 42, mid: 41, fullName: "Левон Семёнович", gender: "male", desc: '' },
    { id: 47, pids: [46], fullName: "Ася", gender: "female", desc: '' },
    { id: 48, pids: [49], fid: 46, mid: 47, fullName: "Люся Левоновна", gender: "female", desc: '' },
    { id: 49, pids: [48], fullName: "Сергей", gender: "male", desc: '' },

    { id: 50, pids: [51], fid: 49, mid: 48, name: 'Вика', fullName: "Виктория Сергеевна", gender: "female", desc: '' },
    { id: 51, pids: [50], fullName: "Самвел", gender: "male", desc: '' },
    { id: 52, pids: [], fid: 51, mid: 50, fullName: "Лолита Самвеловна", gender: "female", desc: '' },
    { id: 53, pids: [], fid: 51, mid: 50, name: 'Вадик', fullName: "Вадим Самвелович", gender: "male", desc: '' },

    { id: 54, pids: [55], fid: 49, mid: 48, fullName: "Марина Сергеевна", gender: "female", desc: '' },
    { id: 55, pids: [54], fullName: "...", gender: "male", desc: '' },
    { id: 56, pids: [], fid: 55, mid: 54, fullName: "Сергей", gender: "male", desc: '' },
    { id: 57, pids: [], fid: 55, mid: 54, fullName: "Георгий", gender: "male", desc: '' },
    { id: 58, pids: [59], fid: 46, mid: 47, fullName: "Ирина Левоновна", gender: "female", desc: '' },
    { id: 59, pids: [58], fullName: "...", gender: "male", desc: '' },
    { id: 60, pids: [61], fid: 59, mid: 58, fullName: "Лана", gender: "female", desc: '' },
    { id: 61, pids: [60], fullName: "Омар", gender: "male", desc: '' },
    { id: 62, pids: [], fid: 61, mid: 60, fullName: "Дамир Омарович", gender: "male", desc: '' },
    { id: 63, pids: [], fid: 61, mid: 60, fullName: "Элина Омаровна", gender: "female", desc: '' },
    { id: 64, pids: [], fid: 61, mid: 60, fullName: "Карим Омарович", gender: "male", desc: '' },
    { id: 65, pids: [], fid: 59, mid: 58, fullName: "Люся", gender: "female", desc: '' },

    { id: 66, pids: [67], fid: 42, mid: 41, fullName: "Сергей", gender: "male", desc: '' },
    { id: 67, pids: [66], fullName: "Элла", gender: "female", desc: '' },
    { id: 68, pids: [69], fid: 66, mid: 67, fullName: "Анжела", gender: "female", desc: '' },
    { id: 69, pids: [68], fullName: "Карен", gender: "male", desc: '' },
    { id: 70, pids: [], fid: 69, mid: 68, name: 'Саша', fullName: "Александр Сергеевич", gender: "male", desc: '' },
    { id: 71, pids: [], fid: 69, mid: 68, name: 'Эдик', fullName: "Эдуард Сергеевич", gender: "male", desc: '' },
    { id: 72, pids: [], fid: 66, mid: 67, fullName: "Рита", gender: "female", desc: '' },
    

    { id: 73, pids: [74, 75], divorced: [74], fid: 15, mid: 14, fullName: "Шмавон Мартиросович Акопов", gender: "male",
        desc: 'Послали на целину, там женился, развёлся, вернулся в Ахалкалак' },
    { id: 74, pids: [73], divorced: [73], fullName: "...", gender: "female", desc: '' },
    { id: 75, pids: [73], fullName: "Люся", gender: "female", desc: '' },
    { id: 76, pids: [], fid: 73, mid: 75, fullName: "Мартын Шмавонович Акопов", gender: "male", desc: '' },


    { id: 77, pids: [78], fid: 21, mid: 22, fullName: "Нелли Георгиевна Азизян", gender: "female", desc: '' },
    { id: 78, pids: [77], fullName: "Левон Азизян", gender: "male", desc: '' },
    { id: 79, pids: [80], fid: 78, mid: 77, fullName: "Анна Левоновна Азизян", gender: "female", desc: '' },
    { id: 80, pids: [79], fullName: "Вова Арамаисович Князян", gender: "male", desc: '' },
    { id: 81, pids: [82], fid: 80, mid: 79, fullName: "Татэвик Воваевна Князян", gender: "female", desc: '' },
    { id: 82, pids: [81], fullName: "Григор", gender: "male", desc: '' },
    { id: 83, pids: [], fid: 82, mid: 81, fullName: "Анри Григорович", gender: "male", desc: '' },
    { id: 84, pids: [85], fid: 80, mid: 79, fullName: "Арам Воваевич Князян", gender: "male", desc: '' },
    { id: 85, pids: [84], fullName: "Хаярпи", gender: "female", desc: '' },
    { id: 86, pids: [], fid: 84, mid: 85, name: 'Мика', fullName: "Микаел Арамович Князян", gender: "male", desc: '' },
    
    { id: 87, pids: [88], name: 'Осик', fullName: "Овсанна Константиновна Меликсетян", gender: "female", desc: '' },
    { id: 88, pids: [87], fid: 78, mid: 77, name: 'Арто', fullName: "Артавазд Левонович Азизян", gender: "male", desc: '' },
    { id: 89, pids: [90], fid: 88, mid: 87, fullName: "Анна Артаваздовна Азизян", gender: "female", desc: '' },
    { id: 90, pids: [89], fullName: "Карен", gender: "male", desc: '' },
    // { id: 91, pids: [], fid: 90, mid: 89, fullName: "...", gender: "male", desc: '' },
];


members.forEach((member) => {
    if (!member.name){
        member.name = member.fullName.split(' ')[0];
    }
    member.age = (new Date((member.dD ? new Date(member.dD) : new Date()) - (new Date(member.bD)))).getFullYear() || '-';
    if (!member.bD && !member.dD) {
        member.dates = '';
    } else {
        member.dates = (member.bD || '') + ' — ' + (member.dD || '');
    }
})

family.on('render-link', function (sender, args) {
    var cnodeData = family.get(args.cnode.id);
    var nodeData = family.get(args.node.id);
    if (cnodeData.divorced != undefined && nodeData.divorced != undefined &&
        cnodeData.divorced.includes(args.node.id) && nodeData.divorced.includes(args.cnode.id)) {
        // console.log(args.html);
        args.html = args.html.replace("path", "path stroke-dasharray='3, 2'");
    }
});

family.load(members);

