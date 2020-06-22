<template>
  <section>
    <template v-for="(content, index) of contents.meta">
      <Box
        v-if="content.type === 'box'"
        :class="content.classes"
        :contents="getContents(content)"
        :key="asKey(content, index)"
        :root="root"
        class=""
      />
      <h3 v-if="content.type === 'legend'" :key="asKey(content, index)" :class="content.classes" class="is-size-5">
        {{ content.caption || content.name }}
      </h3>
      <b-field
        v-if="content.type === 'input'"
        :class="content.classes"
        :key="asKey(content, index)"
        :label="content.subtype !== 'checkbox' && (content.caption || content.name)"
        :labelFor="asKey(content, index)"
        class=""
      >
        <b-checkbox
          v-if="content.subtype === 'checkbox'"
          :class="content.classes"
          :id="asKey(content, index)"
          :key="asKey(content, index)"
          :name="asKey(content, index)"
          :value="getInputValue(content)"
          @input.native="getAction(content, defaultCheckHandler)($event, content)"
          class=""
          >{{ content.caption || content.name }}</b-checkbox
        >
        <b-input
          v-if="isAlphaNumeric(content.subtype)"
          :disabled="content.disabled"
          :icon="content.hasIconsLeft"
          :icon-right="content.hasIconsRight"
          :id="asKey(content, index)"
          :maxlength="content.maxLength"
          :name="asKey(content, index)"
          :pattern="content.validationPattern"
          :placeholder="content.caption || content.name"
          :required="content.required"
          :type="content.subtype"
          :validation-message="content.validationMessage"
          :value="getInputValue(content)"
          @input.native="getAction(content, defaultInputHandler)($event, content)"
        />
        <b-datetimepicker
          v-if="content.subtype === 'datetime'"
          :datetime-formatter="defaultDateTimeFormatter"
          :datetime-parser="defaultDateTimeParser"
          :datepicker="datepickerConfig"
          :icon-right="content.hasIconsRight"
          :placeholder="content.caption || content.name"
          :picker-format-month-year="false"
          :value="getInputValue(content)"
          @input="getAction(content, defaultDateTimeHandler)($event, content)"
        />
      </b-field>
      <b-button
        v-if="content.type === 'button'"
        :class="content.classes"
        :icon-left="content.hasIconsLeft"
        :icon-right="content.hasIconsRight"
        :key="asKey(content, index)"
        :native-type="content.subtype || content.type"
        @click.native="content.action"
        type="is-primary"
        >{{ content.caption || content.name }}</b-button
      >
    </template>
  </section>
</template>

<script lang="ts">
import { get, set } from 'lodash';
import moment from 'moment';

interface HasValue {
  value: string;
}
interface HasChecked {
  checked: boolean;
}
interface NativeInputEvent {
  target: HasValue & HasChecked;
}
interface HasData {
  data: import('lodash').Many<string | number | symbol>;
  subtype: string;
}
interface MetaHeader {
  parent?: string;
  type: string;
  name: string;
}
type Action = ($ev: NativeInputEvent, $me: HasData) => void;
interface HasAction {
  action?: Action;
}

export default {
  props: ['contents', 'root', 'lang'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props: any) {
    moment.locale(props.langs || 'hu');
    const datepickerConfig = {
      firstDayOfWeek: 1,
      dayNames: moment.localeData().weekdaysShort(),
      monthNames: moment.localeData().months()
    };
    const isAlphaNumeric = (type: string) => {
      return ['text', 'number', 'email', 'url'].includes(type);
    };
    const defaultDateTimeHandler = ($ev: Date | number, $me: HasData) => {
      set(props.root, $me.data, parseInt(moment($ev).format('x'), 10));
    };
    const defaultInputHandler = ($ev: NativeInputEvent, $me: HasData) => {
      set(props.root, $me.data, $me.subtype !== 'number' ? $ev.target.value : parseFloat($ev.target.value));
    };
    const defaultCheckHandler = ($ev: NativeInputEvent, $me: HasData) => {
      console.log($me);
      set(props.root, $me.data, $ev.target.checked);
    };
    const defaultDateTimeFormatter = (date: Date) => {
      return moment(date).format('L LT');
    };
    const defaultDateTimeParser = (date: string) => {
      return new Date(Date.parse(date));
    };
    const getAction = (content: HasAction, defaultHandler: Action) => {
      return content.action || defaultHandler;
    };
    function asKey(content: MetaHeader, index: number) {
      return `${content.parent || 'root'}_${content.type}_${content.name}_${index}`;
    }
    const getContents = (content: { data: MetaHeader[]; name: string }) => {
      content.data.forEach((item: MetaHeader) => {
        item.parent = content.name;
      });
      return { meta: content.data };
    };
    const getInputValue = (content: HasData) => {
      const data = get(props.root, content.data);
      return content.subtype !== 'number' ? data : parseFloat(isNaN(data) ? '0' : data);
    };
    return {
      asKey,
      datepickerConfig,
      defaultCheckHandler,
      defaultDateTimeFormatter,
      defaultDateTimeHandler,
      defaultDateTimeParser,
      defaultInputHandler,
      getContents,
      getInputValue,
      getAction,
      isAlphaNumeric
    };
  }
};
</script>
