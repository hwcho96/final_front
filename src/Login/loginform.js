import React, { Component } from "react";
import "./loginform.css";

//마테리얼
import Checkbox from "@material-ui/core/Checkbox";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

class loginform extends Component {
  render() {
    const IdCheck = styled(Checkbox)({
      color: "#2a9d8f",
    });

    const LoginBtn = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
    });
    return (
      <div className="loginform">
        <form className="loginmainback">
          {/* 상단 회원가입 버튼 */}
          <div id="loginbtn" onClick={this.props.SingUpOpen}>
            <i className="fas fa-pencil-alt"></i>
          </div>

          {/* 로그인 타이틀 */}
          <div id="logintit">로그인</div>

          {/* 아이디 input 박스 */}
          <div className="loginbox">
            <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
            <input
              type="text"
              className="logininput"
              placeholder="아이디"
            ></input>
            <div className="logini"></div>
          </div>

          {/* 비밀번호 input 박스 */}
          <div className="loginbox">
            <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
            <input
              type="password"
              className="logininput"
              placeholder="비밀번호"
            ></input>
            <div className="logini"></div>
          </div>

          {/* 아이디 저장 체크 박스 */}
          <div id="logincheckbox">
            {/* 마테리얼 칼라를 변경하기 위해서 color 인라인으로 삽입 필요 
            하지만 오류 발생 */}
            <IdCheck size="small" color="default" />
            아이디 저장
          </div>

          <div id="loginhidbox">여기다가 검증 문구 삽입도 가능해</div>
          {/* 아이디 / 비밀번호 분실 박스  */}
          <span id="loginspanbox" onClick={this.props.FindIdModalOpen}>
            아이디 / 비밀번호 분실
          </span>

          {/* 버튼 박스 */}
          <div id="loginbtnbox">
            <LoginBtn
              onClick={this.props.LoginModalClose}
              variant="outlined"
              className="loginbtn2"
              id="loginbtn2"
            >
              로그인
            </LoginBtn>
            <LoginBtn
              onClick={this.props.LoginModalClose}
              variant="outlined"
              className="loginbtn2"
            >
              취소
            </LoginBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default loginform;