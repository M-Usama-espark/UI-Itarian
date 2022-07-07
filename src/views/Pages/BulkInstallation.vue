<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <Tabs :tabs="['Bulk Installation', 'Remote Control by ITarian']">
          <template v-slot:1>
            <div class="block-contentt">
              <div class="inner-content">
                <div class="col-md-6">
                  <div class="underline">
                    <h4>Signed Packages with Default Settings</h4>
                  </div>
                  <div class="mt-3 d-flex gap">
                    <b-button squared variant="outline-success">
                      <i class="fa-brands fa-windows"></i>
                      Windows
                    </b-button>
                    <b-button squared variant="outline-success">
                      <i class="fa-brands fa-apple"></i>
                      macOS
                    </b-button>
                    <b-button squared variant="outline-success">
                      <i class="fa-brands fa-linux"></i>
                      Linux
                    </b-button>
                  </div>
                  <div class="desc mt-3">
                    <p>
                      Signed Bulk Installation Package includes file(s) for
                      Windows x86/x64 (Hybrid) platforms, and consists of
                      settings for account admin user, default customer, default
                      group, and include Default Security Level 1 Profile.
                    </p>
                    <p>
                      If Comodo Client - Security is selected, Signed Bulk
                      Installation Package will contain latest versions of both
                      Communication Client and Comodo Client - Security.
                    </p>
                    <p>
                      If only Communication Client is selected, Signed Bulk
                      Installation Package will include "Default Version" of
                      Communication Client.
                    </p>
                  </div>
                  <div class="selection">
                    <span>Choose clients</span>
                    <p class="desc">
                      Please visit Supported Device Platforms section for more
                      information.
                    </p>
                    <b-form-checkbox> Communication Client </b-form-checkbox>
                    <b-form-checkbox>
                      Comodo Client - Security
                    </b-form-checkbox>
                    <p class="desc mt-2">
                      In order agents to communicate with server properly,
                      please check out firewall requirements here
                    </p>
                  </div>
                  <div class="selection-Btn">
                    <div class="d-flex justify-content-end gap">
                      <b-button squared variant="primary"
                        >Customize Bulk Package</b-button
                      >
                      <b-button squared variant="primary"
                        >Download Installer</b-button
                      >
                    </div>
                    <p class="mt-2">
                      By downloading these files you automatically agree
                      with«End User License Agreement.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:2>
            <div class="block-contentt">
              <div class="inner-content">
                <div class="col-md-2">
                  <div class="remote-control tex-center">
                    <div
                      class="d-flex justify-content-center flex-column align-items-center"
                    >
                      <div class="icon">
                        <span class="fa-solid fa-code-branch"></span>
                      </div>
                      <div class="mt-2 text-center">
                        <p>Remote Control by ITarian</p>
                        <div>
                          <span>Version: 7.1.42612.22060 </span>
                        </div>
                        <div>
                          <span>Release Date: 2022/06/24 05:00:00 AM</span>
                        </div>
                        <div class="mt-2">
                          <div class="input-group mb-3">
                            <select
                              class="custom-select"
                              id="inputGroupSelect02"
                            >
                              <option value="windows">Windows</option>
                              <option value="macOS">macOS</option>
                            </select>
                          </div>
                          <b-button class="full-w" squared variant="success"
                            >Download</b-button
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "../../components/SubComponents/tabs.vue";
export default {
  name: "bulk-installation",
  components: { Tabs },
  data() {
    return {
      isSearch: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.block-contentt {
  background: #edf2f6;
  padding: 2rem;
  .inner-content {
    background: #f7fafb;
    padding: 1.5rem 2rem;
    .underline {
      border-bottom: 1px solid lightgray;
    }
    .gap {
      gap: 1.5rem;
    }
    .desc {
      font-size: 11px;
      color: gray;
    }
    ::v-deep .selection {
      span {
        font-weight: 600;
      }
      .custom-control-label {
        padding-left: 0.5rem;
      }
    }
    .selection-Btn {
      text-align: right;
    }
    .remote-control {
      .icon {
        font-size: 3rem;
        text-align: center;
        color: white;
        background: #db0a0a;
        width: 5rem;
        border-radius: 25%;
      }
      p {
        font-weight: 600;
      }
    }
  }
}
</style>
