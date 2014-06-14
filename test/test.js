;(function() {
  var marks = {
    openingBrackets: '‘“（〔［｛〈《「『【｟〘〖«〝'.split('')
  , closeingBrackets: '’”）〕］｝〉》」』】｠〙〗»	〟'.split('')
  , middleDots: '・：；'.split('')
  , fullStops: '。．'.split('')
  , commas: '、，'.split('')

  , middleBefore: ['M']
  , middleAfter: ['M']
  , headBefore: ['']
  , headAfter: ['M']
  , endBefore: ['M']
  , endAfter: ['']
  }

  var rules = [
    {
      name: 'a'
    , detail: '\
        When closing brackets (cl-02) come immediately after commas (cl-07) \
        or full stops (cl-06), remove the default half em space between them \
        and, in principle, add a half em space after the closing brackets \
        (see Fig. 3.13 ①).'
    , patters: [
        {
          pairs: ['fullStops', 'closeingBrackets']
        , assetWidth: '1.5' // em
        }
      , {
          pairs: ['commas', 'closeingBrackets']
        , assetWidth: '1.5' // em
        }
      ]
    }
  , {
      name: 'b'
    , detail: '\
        When commas (cl-07) come immediately after closing brackets (cl-02), \
        remove the default half em space between them and, in principle, \
        add a half em space after the comma. When full stops (cl-06) come \
        immediately after closing brackets (cl-02), remove the default half em space \
        between them and, in middle of a line, add a half em space after the full stop; \
        at the end of a line, in principle, add a half em space after the full \
        stop (see Fig. 3.13 ②).'
    , patters: [
        {
          pairs: ['closeingBrackets', 'commas']
        , assetWidth: '1.5' // em
        }
      , {
          pairs: ['closeingBrackets', 'commas']
        , assetWidth: '1.5' // em
        }
      ]
    }

  , {
      name: 'c'
    , detail: '\
        When opening brackets (cl-01) come immediately after commas (cl-07), \
        in principle, add a half em space between them (see Fig. 3.13 ③). \
        When opening brackets (cl-01) come immediately after full stops (cl-06) \
        in the middle of a line, add a half em space between them. \
        Note that when full stops (cl-06) come in the bottom of lines, \
        in principle, insert a half space after full stops (cl-06). \
        '
    , patters: [
        {
          pairs: ['commas', 'openingBrackets']
        , assetWidth: '1.5' // em
        }
      , {
          pairs: ['fullStops', 'openingBrackets']
        , assetWidth: '1.5' // em
        }
      ]
    }
  , {
      name: 'd'
    , detail: '\
        When opening brackets (cl-01) come immediately after \
        closing brackets (cl-02), in principle, add a half em space between \
        them (see Fig. 3.13 ④). \
        '
    , patters: [
        {
          pairs: ['closeingBrackets', 'openingBrackets']
        , assetWidth: '1.5' // em
        }
      ]
    }

  , {
      name: 'e'
    , detail: '\
        When opening brackets (cl-01) come immediately after other opening \
        brackets (cl-01), set them solid and, in principle, add a half em space \
        before the first one (see Fig. 3.13 ⑤). \
        '
    , patters: [
        {
          pairs: ['openingBrackets', 'openingBrackets']
        , assetWidth: '1.5' // em
        }
      ]
    }

  , {
      name: 'f'
    , detail: '\
        When closing brackets (cl-02) come immediately after \
        other closing brackets (cl-02), set them solid and, in principle, \
        add a half em space after the last closing bracket (see Fig. 3.13 ⑥). \
        '
    , patters: [
        {
          pairs: ['closeingBrackets', 'closeingBrackets']
        , assetWidth: '1.5' // em
        }
      ]
    }

  , {
      name: 'g'
    , detail: '\
        When middle dots (cl-05) come immediately after closing brackets (cl-02), \
        in principle, add a quarter em space before the following middle dot \
        (see Fig. 3.13 ⑦). \
        '
    , patters: [
        {
          pairs: ['closeingBrackets', 'middleDots']
        , assetWidth: '1.25' // em
        }
      ]
    }

  , {
      name: 'h'
    , detail: '\
        When opening brackets (cl-01) come immediately after middle dots (cl-05), \
        in principle, add a quarter em space after the preceding middle dot \
        (see Fig. 3.13 ⑦). \
        '
    , patters: [
        {
          pairs: ['middleDots', 'openingBrackets']
        , assetWidth: '1.25' // em
        }
      , {
          pairs: ['closeingBrackets', 'middleDots', 'openingBrackets']
        , assetWidth: '2' // em
        }
      ]
    }
  ]

  var testContainer = $('#test')
  _.each(rules, appendRule())

  function appendRule(rule) {

  }
}())
