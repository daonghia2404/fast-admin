/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import { getPolicyAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import { TPrivacyPolicyModalProps } from './PrivacyPolicyModal.types';
import './PrivacyPolicyModal.scss';

const PrivacyPolicyModal: React.FC<TPrivacyPolicyModalProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const policyState = useSelector((state: TRootState) => state.articleReducer.policy);
  const policyData = policyState?.data?.ListArticle?.[0];

  const getPolicyData = useCallback(() => {
    dispatch(getPolicyAction.request());
  }, [dispatch]);

  useEffect(() => {
    if (visible) {
      getPolicyData();
    }
  }, [getPolicyData, visible, policyState]);

  return (
    <Modal visible={visible} onClose={onClose} maxWidth="84rem" radius wrapClassName="PrivacyPolicyModal-wrapper">
      <div className="PrivacyPolicyModal-title">Điều khoản chính sách</div>
      <div
        className="PrivacyPolicyModal-content ck-content style-content-editable"
        dangerouslySetInnerHTML={{ __html: policyData?.content || '' }}
      />
    </Modal>
  );
};

export default PrivacyPolicyModal;
