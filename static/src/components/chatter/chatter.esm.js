/* Copyright 2021 ITerra - Sergey Shebanin
 * Copyright 2023 Onestein - Anjeel Haria
 * Copyright 2023 Taras Shabaranskyi
 * License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl). */

import {Chatter} from "@mail/chatter/web_portal_project/chatter";
import {patch} from "@web/core/utils/patch";
import {useOnChange} from "@odoo/owl";

patch(Chatter.prototype, {
    setup() {
        super.setup();
        useOnChange(
            () => [this.state.isAttachmentBoxOpened],
            (isAttachmentBoxOpened) => this._resetScrollToAttachmentsEffect(isAttachmentBoxOpened)
        );
    },
    /**
     * Prevent scrollIntoView error
     * @param {Boolean} isAttachmentBoxOpened
     * @private
     */
    _resetScrollToAttachmentsEffect(isAttachmentBoxOpened) {
        if (!isAttachmentBoxOpened) {
            this.state.scrollToAttachments = 0;
        }
    },
});
