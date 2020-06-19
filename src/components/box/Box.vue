<template>
  <span>
    <span v-for="(content, index) of contents.meta" :key="asKey(content, index)">
      <Box :contents="getContents(content)" :root="root" :class="'box'" v-if="content.type === 'box'" />
      <h3 v-if="content.type === 'legend'" class="is-size-3">{{ content.caption || content.name }}</h3>
      <b-checkbox
        v-if="content.type === 'input' && content.subtype === 'checkbox'"
        :value="getInputValue(content)"
        @input.native="getAction(content, defaultCheckHandler)($event, content)"
        >{{ content.caption || content.name }}</b-checkbox
      >
      <b-field v-if="content.type === 'input' && content.subtype !== 'checkbox'" :label="content.caption || content.name">
        <b-input
          :placeholder="content.caption || content.name"
          :type="content.subtype"
          :icon="content.hasIconsLeft"
          :icon-right="content.hasIconsRight"
          :required="content.required"
          :pattern="content.validationPattern"
          :validation-message="content.validationMessage"
          :value="getInputValue(content)"
          @input.native="getAction(content, defaultInputHandler)($event, content)"
        />
      </b-field>
      <b-button
        v-if="content.type === 'button'"
        :native-type="content.subtype || content.type"
        :icon-left="content.hasIconsLeft"
        :icon-right="content.hasIconsRight"
        type="is-primary"
        @click.native="content.action"
        >{{ content.caption || content.name }}</b-button
      >
    </span>
  </span>
</template>

<script lang="ts">
import { get, set } from 'lodash';

export default {
  props: ['contents', 'root'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props: any) {
    const defaultInputHandler = ($ev, $me) => {
      set(props.root, $me.data, $me.subtype !== 'number' ? $ev.target.value : parseFloat($ev.target.value));
    };
    const defaultCheckHandler = ($ev, $me) => {
      console.log($me);
      set(props.root, $me.data, $ev.target.checked);
    };
    const getAction = (content, defaultHandler) => {
      return content.action || defaultHandler;
    };
    function asKey(content, index) {
      return `${content.parent || 'root'}_${content.type}_${content.name}_${index}`;
    }
    const getContents = content => {
      content.data.forEach(item => {
        item.parent = content.name;
      });
      return { meta: content.data };
    };
    const getInputValue = content => {
      const data = get(props.root, content.data);
      return content.subtype !== 'number' ? data : parseFloat(isNaN(data) ? '0' : data);
    };
    return { getContents, getInputValue, defaultInputHandler, defaultCheckHandler, asKey, getAction };
  }
};
</script>
