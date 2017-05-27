export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '仪表板',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'organization',
        data: {
          menu: {
            title: '常用菜单',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: '常用菜单1',
                selected: false,
                expanded: false,
                order: 100,
              }
            }
          }
        ]
      },
      // {
      //   path: 'zly',
      //   data: {
      //     menu: {
      //       title: '多例子',
      //       icon: 'ion-funnel',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //    {
      //       path: 'gutable',
      //       data: {
      //         menu: {
      //           title: '滚动表格', 
      //           selected: false,
      //           expanded: false,
      //           order: 100,    
      //         }
      //       }         
      //     },
      //   ]
      // },
      {
        path: '',
        data: {
          menu: {
            title: '组织管理',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'department',
            data: {
              menu: {
                title: '部门管理',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
             {
                path: 'CreateDepartment',
                data: {
                  menu: {
                    title: '新建部门',
                  }
                }
              },
              {
                path: 'DepartmentList',
                data: {
                  menu: {
                    title: '部门列表',
                  }
                }
              },  
            ]
          },
          {
            path: 'user',
            data: {
              menu: {
                title: '用户管理',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'usercreate',
                data: {
                  menu: {
                    title: '新增用户',
                  }
                }
              },
              {
                path: 'usermgmt',
                data: {
                  menu: {
                    title: '用户信息',
                  }
                }
              },
            ]
          },
          {
            path: 'role',
            data: {
              menu: {
                title: '角色管理',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'rolecreate',
                data: {
                  menu: {
                    title: '创建角色',
                  }
                }
              },
              {
                path: 'roleprivilege',
                data: {
                  menu: {
                    title: '角色权限管理',
                  }
                }
              },
              {
                path: 'rolepeople',
                data: {
                  menu: {
                    title: '角色人员管理',
                  }
                }
              }
            ]
          },
          {
            path: 'dataprivilege',
            data: {
              menu: {
                title: '数据权限管理',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
             {
                path: 'DataOperatePrivilegeToRole',
                data: {
                  menu: {
                    title: '根据角色',
                  }
                }
              },
              {
                path: 'DataOperatePrivilegeToUser',
                data: {
                  menu: {
                    title: '根据用户',
                  }
                }
              }
            ]
          },
          {
            path: 'privilegereport',
            data: {
              menu: {
                title: '权限报表',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
             {
                path: 'UserPrivilegeReport',
                data: {
                  menu: {
                    title: '用户权限报表',
                  }
                }
              }
            ]
          },
          {
            path: 'log',
            data: {
              menu: {
                title: '日志',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'LogForUserLogin',
                data: {
                  menu: {
                    title: '用户登录日志',
                  }
                }
              }, 
              {
                path: 'LogForUserOperate',
                data: {
                  menu: {
                    title: '用户操作日志',
                  }
                }
              },
              {
                path: 'LogForUserLoginException',
                data: {
                  menu: {
                    title: '用户异常登录日志',
                  }
                }
              },
              {
                path: 'LogForUserOperateException',
                data: {
                  menu: {
                    title: '用户异常操作日志',
                  }
                }
              }
            ]
          }
        ]
      },
      
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          }
        ]
      },
   
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
              }
            }
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
          {
            path: 'hottables',
            data: {
              menu: {
                title: 'Hot Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
