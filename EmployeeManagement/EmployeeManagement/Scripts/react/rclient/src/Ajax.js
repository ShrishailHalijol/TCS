import $ from "../node_modules/jquery/dist/jquery";

export const home = obj => {
  window.location.href = "Home";
  console.log(obj);
};

export const register = obj => {
  $.ajax({
    url: "http://localhost:49685/api/account/register",
    method: "POST",
    data: {
      email: $("#txtEmail").val(),
      password: $("#txtPassword").val(),
      confirmPassword: $("#txtConfirmPassword").val()
    },
    success: () => {
      //$('#modelSuccess').modal('show');
      console.log("User has been registered successfully!");
      window.location.href = "Login";
    },
    error: jqXHR => {
      let resp = $.parseJSON(jqXHR.responseText);
      $("#divErrorMessage").text(resp.Message);
      $("#divError").show("show");
    }
  });
};

export const login = obj => {
  console.log($("#txtEmail").val());
  $.ajax({
    url: "http://localhost:49685/token",
    method: "POST",
    header: {
      "Content-Type": "application/json",
      datatype: "jsonp",
      grant_type: "password"
    },
    data: {
      username: $("#txtEmail").val(),
      password: $("#txtPassword").val(),
      grant_type: "password"
    },
    success: response => {
      console.log("Logged in successfully");
      sessionStorage.setItem("accessToken", response.access_token);
      window.location.href = "Employees";
      // ReactDOM.render(<Employees />, document.getElementById('root'));
    },
    error: jqXHR => {
      console.log("Error logging in");
      //obj.setState({ redirect: false });
      var resp = $.parseJSON(jqXHR.responseText);
      $("#divErrorMessage").text(resp.error_description);
      $("#divError").show("show");
    }
  });
};

export const getEmployees = (update) => {
  if(sessionStorage.getItem('accessToken') === null){
    window.location.href = "login";
  }

  $.ajax({
    url: 'http://localhost:49685/api/employees',
    method: 'GET',
    contentType: 'application/json',
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
    },
    success: (data) => {
        $('#divData').removeClass('hidden');
        $('#tblBody').empty();
        update(data);
    },
    error: (jqXHR) => {
      console.log('Error getting data');
        $('#divErrorMessage').text(jqXHR.responseText);
        $('#divError').show('show');
    }
});
};

export const postEmployee = (obj, callback) => {
  $.ajax({
    url: "http://localhost:49685/api/employees",
    method: "POST",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
    "data-Type": "jsonp",
    contentType: "application/json",
    data: JSON.stringify(obj),
    success: (response) => {
      callback(response);
    },
    error: jqXHR => {
      var resp = $.parseJSON(jqXHR.responseText);
      $("#divErrorMessage").text(resp.Message);
      $("#divError").show("show");
    }
  });
};

export const deleteEmployee = (id) => {
  $.ajax({
    url: "http://localhost:49685/api/employees/" + id,
    method: "DELETE",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("accessToken")
    },
    success: response => {
      console.log('deletion successfull');
      // $(obj)
      //   .closest("tr")
      //   .remove();
    },
    error: jqXHR => {
      $("#divErrorMessage").text(jqXHR.responseText);
      $("#divError").show("show");
    }
  });
};

export const logOut = () => {
  sessionStorage.removeItem("accessToken");
  window.location.href = "login";
};


export const closeError = () =>{
  $('#divError').hide('fade');
};
