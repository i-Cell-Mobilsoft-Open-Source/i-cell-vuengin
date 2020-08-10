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
      <!--Component container-->
      <component
        v-if="content.type !== 'box'"
        v-bind:is="getType(content.type, content.subtype)"
        :key="asKey(content, index)"
        :id="asKey(content, index)"
        :labelFor="asKey(content, index)"
        :name="content.name"
        :ui="content.ui"
        :classes="content.classes"
        :caption="content.caption"
        :label="content.subtype !== 'checkbox' && (content.caption || content.name)"
        :capitalize="content.capitalize"
        :custom-class="content.customClass"
        :disabled="content.disabled"
        :placeholder="content.placeHolder"
        :required="content.required"
        :type="content.subtype"
        :value="getInputValue(content)"
        @getInputAction="getAction(content, defaultInputHandler)($event, content)"
        @getDateTimeAction="getAction(content, defaultDateTimeHandler)($event, content)"
        @getDateAction="getAction(content, defaultDateTimeHandler)($event, content)"
      ></component>
    </template>
  </section>
</template>

<script lang="ts">
import { get, set } from 'lodash';
import moment from 'moment';
import { Action } from '@/core/type';
import { HasData, NativeInputEvent, HasAction, MetaHeader } from '@/core/interfaces';

export default {
  props: {
    contents: Object,
    root: Object,
    lang: {
      type: String,
      default: 'hu'
    },
    unix: {
      type: Boolean,
      default: false
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props: any) {
    moment.locale(props.langs || 'hu');
    const datepickerConfig = {
      firstDayOfWeek: 1,
      dayNames: moment.localeData().weekdaysShort(),
      monthNames: moment.localeData().months()
    };
    const getType = (type: string, subtype: string): string => {
      const componentType = ['date', 'datetime', 'checkbox'].includes(subtype) ? subtype : type;
      return `v-icell-${componentType}`;
    };
    const defaultDateTimeHandler = ($ev: Date | number, $me: HasData) => {
      set(props.root, $me.data, props.unix ? parseInt(moment($ev).format('x'), 10) : $ev);
    };
    const defaultInputHandler = ($ev: NativeInputEvent, $me: HasData) => {
      set(props.root, $me.data, $me.subtype !== 'number' ? $ev.target.value : parseFloat($ev.target.value));
    };
    const defaultCheckHandler = ($ev: NativeInputEvent, $me: HasData) => {
      set(props.root, $me.data, $ev.target.checked);
    };
    const defaultDateTimeFormatter = (date: Date): any => {
      return moment(date).format('L LT');
    };
    const defaultDateTimeParser = (date: string): Date => {
      return new Date(Date.parse(date));
    };
    const getAction = (content: HasAction, defaultHandler: Action): any => {
      return content.action || defaultHandler;
    };
    const asKey = (content: MetaHeader, index: number): string => {
      return `${content.parent || 'root'}_${content.type}_${content.name}_${index}`;
    };
    const getContents = (content: { data: MetaHeader[]; name: string }): any => {
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
      defaultDateTimeHandler,
      defaultInputHandler,
      defaultDateTimeFormatter,
      defaultDateTimeParser,
      getContents,
      getInputValue,
      getAction,
      getType
    };
  }
};
</script>
