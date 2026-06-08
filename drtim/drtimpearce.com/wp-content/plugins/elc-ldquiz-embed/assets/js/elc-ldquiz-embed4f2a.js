/**
 * @file elc-ldquiz-embed.js
 * Created by michaeldajewski on 6/30/20.
 */

(function ($) {
    'use strict';

    $('.elcProQuiz_editQuizLink').each(function () {
        let data_quiz_meta_json = this.dataset.quizMeta;
        let quiz_pro_id = $.parseJSON(data_quiz_meta_json).quiz_pro_id;
        $(this).insertBefore('#wpProQuiz_' + quiz_pro_id + ' .wpProQuiz_text').show();
    });

    const elcPostIdSelector = '#learndash_post_' + elcQuizEmbed.post_id;
    const elcHideActions = elcQuizEmbed.hide_actions;

    const hideContentList = function () {
        // console.log('hideContentList()');

        let selector;
        if (elcQuizEmbed.post_type === 'sfwd-courses') {
            selector = elcPostIdSelector + ' .ld-course-content-' + elcQuizEmbed.post_id;
        } else {
            // post_type is: lesson or topic.
            selector = elcPostIdSelector + ' .ld-topic-list';
        }
        if ($(selector).length) {
            $(selector).hide();
        }
    };

    const hideContentActions = function () {
        // console.log('hideContentActions()');
        let selector = elcPostIdSelector + ' .ld-content-actions';

        if ($(selector).length) {
            $(selector).hide();
        }
    };

    $(document).ready(function () {
        // If this is a single quiz page we do nothing.
        if (!$('body').hasClass('single-sfwd-quiz') && elcHideActions === '1') {
            // This script is loaded only on course, lesson and/or topic page.
            // We do not have to check the body classes.
            const observeQuizzes = function () {
                let proQuizzes = $('.wpProQuiz_list');
                let loadQuiz = $('.wpProQuiz_loadQuiz'); // "Quiz is loading…" message

                if (proQuizzes.length > 0 && proQuizzes.length === loadQuiz.length) {
                    proQuizzes.each(function () {
                        ro.observe($(this).get(0));
                    });
                } else {
                    // Quiz may be loaded by script e.g.:
                    //      Quiz -> Settings (tab)
                    //          Display and Content Options (section)
                    //              Custom Question Ordering: ON
                    //                  Randomize Order: ON
                    //                      Display subset of questions: selected
                    //
                    loadQuiz.each(function () {
                        let element = $(this).get(0);
                        if ($(this).siblings('.wpProQuiz_quiz').length) {
                            let wpProQuizList = $('.wpProQuiz_list');
                            element = $(this).siblings('.wpProQuiz_quiz').find(wpProQuizList).get(0);
                        }

                        ro.observe(element);
                    });
                }
            }

            const ro = new ResizeObserver(elements => {
                for (let elem of elements) {
                    // const width = Math.floor(elem.contentRect.width);
                    let height = Math.floor(elem.contentRect.height);
                    if (elem.target.className === 'wpProQuiz_list' && height > 0) {
                        hideContentList();
                        hideContentActions();
                        // Unobserve all observed elements.
                        ro.disconnect();
                    } else if (elem.target.className === 'wpProQuiz_loadQuiz' && height === 0) {
                        // wpProQuiz_loadQuiz did hide meaning wpProQuiz_list is visible.
                        observeQuizzes();
                    }
                }
            });

            observeQuizzes();
        }
    });

})(jQuery);
