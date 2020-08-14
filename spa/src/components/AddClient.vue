<template>
  <form novalidate id="clientForm">
    <fieldset>

      <div class="alert" v-if="!$v.userForm.surname.$invalid && !$v.userForm.name.$invalid && !$v.userForm.mobile.$invalid &&
      !$v.userForm.birthDate.$invalid && !$v.userForm.city.$invalid && !$v.userForm.documentType.$invalid &&
      !$v.userForm.documentDateIssued.$invalid">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        Новый клиент успешно создан
      </div>

      <legend id="legendContact">Атрибуты формы</legend>

      <div id="attributeFieldset">

        <div class="el">
          <div class="blockDiv surnameClass">
            <label for="surname" class="labelSurname">Фамилия ................<em>* </em></label>
            <div class="surnameWithValidity">
              <input id="surname" name="surname" type="text" required
                     v-model="userForm.surname"
                     :class="{ 'is-invalid': $v.userForm.surname.$error }">
              <span class="validity"></span>
            </div>
            <div id="errorSurname">
              <p class="has-error" v-if="!$v.userForm.surname.required">Поле обязательное для заполнения</p>
            </div>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv nameClass">
            <label for="name" class="labelName">Имя .........................<em>* </em></label>
            <div class="nameWithValidity">
              <input id="name" name="name" type="text" required
                     v-model="userForm.name"
                     :class="{ 'is-invalid': $v.userForm.name.$error }">
              <span class="validity"></span>
            </div>
            <div id="errorName">
              <p class="has-error" v-if="!$v.userForm.name.required">Поле обязательное для заполнения</p>
            </div>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv patronymicClass">
            <label for="patronymic" class="labelPatronymic">Отчество ..................</label>
            <input type="text" id="patronymic">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv telNoClass">
            <label for="telNo" class="labelTelNo">Номер телефона ....<em>* </em></label>
            <div class="mobileWithValidity">
              <input type="text" v-model="userForm.mobile" id="telNo" name="telNo"
                     required maxlength="11" minlength="11"
                     placeholder="7XXXXXXXXXX"
                     :class="{ 'is-invalid': $v.userForm.mobile.$error }"/>
              <span class="validity"></span>
            </div>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv dateOfBirthClass">
            <label for="dateOfBirth" class="labelDateOfBirth">Дата рождения .......<em>* </em></label>
            <div class="birthDateWithValidity">
              <input type="date" id="dateOfBirth"
                     v-model="userForm.birthDate"
                     pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                     required
                     :class="{ 'is-invalid': $v.userForm.birthDate.$error }"/>
              <span class="validity"></span>
            </div>
            <div id="errorBirthDate" class="has-error" v-if="!$v.userForm.birthDate.required">
              Поле обязательное для заполнения
            </div>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv genderClass">
            <label for="gender" class="labelGender">Пол ............................</label>
            <div id="gender" class="form-group">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" v-model="userForm.gender" id="gender1"
                       value="male">
                <label class="form-check-label" for="gender1">Мужской</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" v-model="userForm.gender" id="gender2"
                       value="female">
                <label class="form-check-label" for="gender2">Женский</label>
              </div>
            </div>
          </div>
        </div>
        <div class="el">
          <div class="blockDivHigh clientGroupClass">
            <label for="clientGroup" class="labelClientGroup">Группа клиентов......<em>* </em></label>
            <select multiple size="3" id="clientGroup" v-model="userForm.selectedClientGroup">
              <option value="VIP">VIP</option>
              <option value="Проблемные">Проблемные</option>
              <option value="ОМС">ОМС</option>
            </select>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv attendingDoctorClass">
            <label for="attendingDoctor" class="labelAttendingDoctor">Лечащий врач
              ...........</label>
            <select id="attendingDoctor" name="country" v-model="userForm.selectedAttendingDoctor">
              <option>Иванов</option>
              <option>Захаров</option>
              <option>Чернышева</option>
            </select>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv doNotSendSMSClass">
            <label for="doNotSendSMS" class="labelDoNotSendSMS">Не отправлять СМС ..</label>
            <input type="checkbox" class="lg" id="doNotSendSMS" v-model="userForm.doNotSendSMS">
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Адрес</legend>
      <div id="addressFieldset">
        <div class="el">
          <div class="blockDiv indexClass">
            <label for="index" class="labelIndex">Индекс .................</label>
            <input id="index" name="index" type="text" required
                   v-model="userForm.index">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv countryClass">
            <label for="country" class="labelCountry">Страна .................</label>
            <input id="country" name="country" type="text" required
                   v-model="userForm.country">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv regionClass">
            <label for="region" class="labelRegion">Область ................</label>
            <input id="region" name="region" type="text" required
                   v-model="userForm.region">
          </div>
        </div>

        <div class="el">
          <div class="blockDiv cityClass">
            <label for="city" class="labelCity">Город .................<em>* </em></label>
            <div class="cityWithValidity">
              <input type="text" id="city"
                     v-model="userForm.city"
                     required
                     :class="{ 'is-invalid': $v.userForm.city.$error }"/>
              <span class="validity"></span>
            </div>
            <div id="errorCity" class="has-error" v-if="!$v.userForm.city.required">
              Поле обязательное для заполнения
            </div>
          </div>
        </div>

        <div class="el">
          <div class="blockDiv streetClass">
            <label for="street" class="labelStreet">Улица ................</label>
            <input id="street" name="street" type="text" required
                   v-model="userForm.street">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv houseClass">
            <label for="house" class="labelHouse">Дом ..................</label>
            <input id="house" name="house" type="text" required
                   v-model="userForm.house">
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Паспорт</legend>
      <div id="pasportFieldset">
        <div class="el">
          <div class="blockDiv documentTypeClass">
            <label for="documentType" class="labelCity">Паспорт ................<em>* </em></label>
            <div class="documentTypeWithValidity">
              <select id="documentType" name="documentType" v-model="userForm.documentType"
                      :class="{ 'is-invalid': $v.userForm.documentType.$error }">
                <option>Паспорт</option>
                <option>Свид-во о рождении</option>
                <option>Вод. удостоверение</option>
              </select>
              <span class="validity"></span>
            </div>
            <div id="errorDocumentType" class="has-error" v-if="!$v.userForm.documentType.required">
              Поле обязательное для заполнения
            </div>
          </div>
        </div>
        <div class="el">
          <div class="blockDiv documentSeriesClass">
            <label for="documentSeries" class="labelDocumentSeries">Серия ....................</label>
            <input id="documentSeries" name="documentSeries" type="text" required
                   v-model="userForm.documentSeries">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv documentNumberClass">
            <label for="documentNumber" class="labelDocumentNumber">Номер ....................</label>
            <input id="documentNumber" name="documentNumber" type="text" required
                   v-model="userForm.documentNumber">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv documentIssuedClass">
            <label for="documentIssued" class="labelDocumentIssued">Кем выдан ..................</label>
            <input id="documentIssued" name="documentIssued" type="text" required
                   v-model="userForm.documentIssued">
          </div>
        </div>
        <div class="el">
          <div class="blockDiv documentDateIssuedClass">
            <label for="documentDateIssued" class="labelDocumentDateIssued">Когда выдан .........<em>* </em></label>
            <div class="documentDateIssuedWithValidity">
              <input type="date" id="documentDateIssued"
                     v-model="userForm.documentDateIssued"
                     pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                     required
                     :class="{ 'is-invalid': $v.userForm.documentDateIssued.$error }"/>
              <span class="validity"></span>
            </div>
            <div id="errorDocumentDateIssued" class="has-error" v-if="!$v.userForm.documentDateIssued.required">
              Поле обязательное для заполнения
            </div>
          </div>
        </div>
      </div>
      <!--
      <div class="submitButton">
        <p style="text-align: center">
          <button @click="submitButtonClick()">СОХРАНИТЬ</button>
        </p>
      </div>
      -->
    </fieldset>

  </form>
</template>

<script>
  import {
    required,
    email,
    minLength,
    sameAs
  } from "vuelidate/lib/validators";

  const TEMPLATES_MAP = {
    alpha: "Alphanumeric characters only.",
    minLength: "Must have a length no less than {{min}}.",
    required: "Required field."
  };

  export default {
    name: "AddClient",
    props: [],
    components: {},
    created() {
    },
    data() {
      return {
        userForm: {
          surname: "",
          name: "",
          birthDate: null,
          mobile: "",
          gender: "",
          password: "",
          confirmPassword: "",
          accept: "",
          selectedClientGroup: [],
          selectedAttendingDoctor: "Иванов",
          doNotSendSMS: false,
          index: "",
          country: "",
          region: "",
          city: "",
          street: "",
          house: "",
          documentType: "Паспорт",
          documentSeries: "",
          documentNumber: "",
          documentIssued: "",
          documentDateIssued: null,
        },
        isSubmitted: false,
      }
    },
    validations: {
      userForm: {
        surname: {
          required,
        },
        name: {
          required,
        },
        birthDate: {
          required,
        },
        mobile: {
          required,
          minLength: minLength(11),
        },
        gender: {
          required
        },
        city: {
          required
        },
        documentType: {
          required
        },
        documentDateIssued: {
          required
        },
        accept: {
          required(val) {
            return val
          }
        }
      }
    },
    mounted() {
    },
    methods: {
      submitButtonClick() {
        alert('')
      }
    },
    computed: {},

  }
</script>

<style>
  .has-error {
    font-size: calc(0.6em + 0.1em);
    font-style: italic;
    color: red;
    text-align: left;
    margin-top: -0.3em;
    margin-bottom: 1em;
  }

  div {
    position: relative;
    text-align: center;
  }

  input[type="number"] {
    width: 100px;
  }

  input + span {
    padding-right: 30px;
  }

  input:invalid + span:after {
    position: absolute;
    content: '✖';
    padding-left: 5px;
    color: #8b0000;
  }

  input:valid + span:after {
    position: absolute;
    content: '✓';
    padding-left: 5px;
    color: #009000;
  }

  fieldset {
    background: floralwhite;
    border: 2px solid darkcyan;
    border-radius: 5px;
  }

  legend {
    margin-top: -15px;
    background: floralwhite;
  }

  input, option, select {
    font-size: calc(0.9em + 0.2em);
  }

  #surname, #name, #patronymic, #telNo, #dateOfBirth, option, select, #city, #documentDateIssued {
    width: 10em;
  }

  tr {
    margin-bottom: 1em;
  }

  .form-group {
    text-align-last: left;
    display: flex;
  }

  input.lg {
    width: 1.5em;
    height: 1.5em;
  }

  .blockDiv {
    display: grid;
    position: relative;
    grid-template-columns: 11em 14em;
    grid-template-rows: 2em 2em;
    grid-auto-columns: 10em;
    grid-auto-rows: 10em;
    width: 15em;
    height: 5em;
  }

  .blockDivHigh {
    display: grid;
    position: relative;
    grid-template-columns: 11em 14em;
    grid-template-rows: 5em;
    grid-auto-columns: 10em;
    grid-auto-rows: 10em;
    width: 15em;
    height: 5em;
  }

  .labelSurname, .labelName, .labelPatronymic, .labelTelNo, .labelDateOfBirth,
  .labelGender, .labelClientGroup, .labelAttendingDoctor, .labelDoNotSendSMS,
  .labelIndex, .labelCity, .labelRegion, .labelCountry, .labelStreet, .labelHouse,
  .labelDocumentSeries, .labelDocumentNumber, .labelDocumentIssued, .labelDocumentDateIssued {
    grid-area: auto / 1;
    align-self: self-end;
  }

  .surnameWithValidity, .nameWithValidity, #patronymic, .mobileWithValidity,
  .birthDateWithValidity, #gender, #attendingDoctor, #doNotSendSMS, .cityWithValidity,
  .documentTypeWithValidity, .documentDateIssuedWithValidity {
    grid-area: 1 / 2;
  }

  #errorSurname, #errorName, #errorBirthDate, #errorCity, #errorDocumentType, #errorDocumentDateIssued {
    grid-area: 2 / 2;
  }

  #clientGroup {
    grid-column: 2 / 2;
  }

  #attributeFieldset, #addressFieldset, #pasportFieldset {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(26em, 1fr));;
  }

  .el {
    align-content: baseline;
  }

  button {
    height: 3em;
    width: 8em;
    background: dodgerblue;
    font-weight: bold;
    color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 12px 0px #2c3e50;
  }

  button:hover {
    height: 3em;
    width: 8em;
    background: royalblue;
    color: #FFFFFF;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 0px #2c3e50;
  }

  /* The alert message box */
  .alert {
    padding: 20px;
    background-color: #4CAF50; /* Red */
    color: white;
    margin-bottom: 15px;
  }

  /* The close button */
  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  /* When moving the mouse over the close button */
  .closebtn:hover {
    color: black;
  }

  /* from here: https://stackoverflow.com/questions/7372038/is-there-any-way-to-change-input-type-date-format
  */
  input[type="date"]::-webkit-datetime-edit, input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button {
    color: #fff;
    position: relative;
  }

  input[type="date"]::-webkit-datetime-edit-year-field{
    position: absolute !important;
    border-left:1px solid #8c8c8c;
    padding: 2px;
    color:#000;
    left: 56px;
  }

  input[type="date"]::-webkit-datetime-edit-month-field{
    position: absolute !important;
    border-left:1px solid #8c8c8c;
    padding: 2px;
    color:#000;
    left: 26px;
  }


  input[type="date"]::-webkit-datetime-edit-day-field{
    position: absolute !important;
    color:#000;
    padding: 2px;
    left: 4px;

  }
</style>
