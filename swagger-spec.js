window.swaggerSpec={
  "openapi" : "3.0.0",
  "info" : {
    "title" : "CLOUD-XJDF",
    "description" : "The json flavour of XJDF",
    "version" : "0.0.1"
  },
  "paths" : {
    "/queue-entry/submit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandSubmitQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandSubmitQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandSubmitQueueEntry" ]
              }
            },
            "multipart/form-data" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "XJMF" : {
                    "type" : "object",
                    "properties" : {
                      "Version" : {
                        "type" : "string"
                      },
                      "Header" : {
                        "$ref" : "#/components/schemas/Header"
                      },
                      "CommandSubmitQueueEntry" : {
                        "$ref" : "#/components/schemas/CommandSubmitQueueEntry"
                      }
                    },
                    "required" : [ "Header", "CommandSubmitQueueEntry" ]
                  },
                  "XJDF" : {
                    "$ref" : "#/components/schemas/XJDF"
                  },
                  "attachments" : {
                    "type" : "array",
                    "items" : {
                      "type" : "string",
                      "format" : "binary"
                    }
                  }
                },
                "required" : [ "XJMF" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseSubmitQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseSubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseSubmitQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/modify" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandModifyQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandModifyQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandModifyQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseModifyQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseModifyQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseModifyQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/resubmit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandResubmitQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandResubmitQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandResubmitQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseResubmitQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseResubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseResubmitQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/return" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandReturnQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandReturnQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandReturnQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseReturnQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseReturnQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseReturnQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-entry/request" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandRequestQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandRequestQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandRequestQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseRequestQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseRequestQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseRequestQueueEntry" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/gang/force" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandForceGang" : {
                    "$ref" : "#/components/schemas/CommandForceGang"
                  }
                },
                "required" : [ "Header", "CommandForceGang" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseForceGang" : {
                      "$ref" : "#/components/schemas/ResponseForceGang"
                    }
                  },
                  "required" : [ "Header", "ResponseForceGang" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/gang/status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryGangStatus" : {
                    "$ref" : "#/components/schemas/QueryGangStatus"
                  }
                },
                "required" : [ "Header", "QueryGangStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseGangStatus" : {
                      "$ref" : "#/components/schemas/ResponseGangStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseGangStatus" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryGangStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalGangStatus" : {
                            "$ref" : "#/components/schemas/SignalGangStatus"
                          }
                        },
                        "required" : [ "Header", "SignalGangStatus" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/known-devices" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownDevices" : {
                    "$ref" : "#/components/schemas/QueryKnownDevices"
                  }
                },
                "required" : [ "Header", "QueryKnownDevices" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseKnownDevices" : {
                      "$ref" : "#/components/schemas/ResponseKnownDevices"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownDevices" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryKnownDevices/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalKnownDevices" : {
                            "$ref" : "#/components/schemas/SignalKnownDevices"
                          }
                        },
                        "required" : [ "Header", "SignalKnownDevices" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/known-messages" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownMessages" : {
                    "$ref" : "#/components/schemas/QueryKnownMessages"
                  }
                },
                "required" : [ "Header", "QueryKnownMessages" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseKnownMessages" : {
                      "$ref" : "#/components/schemas/ResponseKnownMessages"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownMessages" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/known-subscriptions" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownSubscriptions" : {
                    "$ref" : "#/components/schemas/QueryKnownSubscriptions"
                  }
                },
                "required" : [ "Header", "QueryKnownSubscriptions" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseKnownSubscriptions" : {
                      "$ref" : "#/components/schemas/ResponseKnownSubscriptions"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownSubscriptions" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryKnownSubscriptions/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalKnownSubscriptions" : {
                            "$ref" : "#/components/schemas/SignalKnownSubscriptions"
                          }
                        },
                        "required" : [ "Header", "SignalKnownSubscriptions" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/notification" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryNotification" : {
                    "$ref" : "#/components/schemas/QueryNotification"
                  }
                },
                "required" : [ "Header", "QueryNotification" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseNotification" : {
                      "$ref" : "#/components/schemas/ResponseNotification"
                    }
                  },
                  "required" : [ "Header", "ResponseNotification" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryNotification/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalNotification" : {
                            "$ref" : "#/components/schemas/SignalNotification"
                          }
                        },
                        "required" : [ "Header", "SignalNotification" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/pipe-control" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandPipeControl" : {
                    "$ref" : "#/components/schemas/CommandPipeControl"
                  }
                },
                "required" : [ "Header", "CommandPipeControl" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponsePipeControl" : {
                      "$ref" : "#/components/schemas/ResponsePipeControl"
                    }
                  },
                  "required" : [ "Header", "ResponsePipeControl" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/queue-status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryQueueStatus" : {
                    "$ref" : "#/components/schemas/QueryQueueStatus"
                  }
                },
                "required" : [ "Header", "QueryQueueStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseQueueStatus" : {
                      "$ref" : "#/components/schemas/ResponseQueueStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseQueueStatus" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/resource/command" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandResource" : {
                    "$ref" : "#/components/schemas/CommandResource"
                  }
                },
                "required" : [ "Header", "CommandResource" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseResource" : {
                      "$ref" : "#/components/schemas/ResponseResource"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/resource/query" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryResource" : {
                    "$ref" : "#/components/schemas/QueryResource"
                  }
                },
                "required" : [ "Header", "QueryResource" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseResource" : {
                      "$ref" : "#/components/schemas/ResponseResource"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryResource/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalResource" : {
                            "$ref" : "#/components/schemas/SignalResource"
                          }
                        },
                        "required" : [ "Header", "SignalResource" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/persistent-channel/stop" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandStopPersistentChannel" : {
                    "$ref" : "#/components/schemas/CommandStopPersistentChannel"
                  }
                },
                "required" : [ "Header", "CommandStopPersistentChannel" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseStopPersistentChannel" : {
                      "$ref" : "#/components/schemas/ResponseStopPersistentChannel"
                    }
                  },
                  "required" : [ "Header", "ResponseStopPersistentChannel" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryStatus" : {
                    "$ref" : "#/components/schemas/QueryStatus"
                  }
                },
                "required" : [ "Header", "QueryStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseStatus" : {
                      "$ref" : "#/components/schemas/ResponseStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseStatus" ]
                }
              }
            },
            "description" : "TBD"
          }
        },
        "callbacks" : {
          "signal" : {
            "{$request.body#/QueryStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Version" : {
                            "type" : "string"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "SignalStatus" : {
                            "$ref" : "#/components/schemas/SignalStatus"
                          }
                        },
                        "required" : [ "Header", "SignalStatus" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Version" : {
                              "type" : "string"
                            },
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    },
                    "description" : "TBD"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/wake-up" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandWakeUp" : {
                    "$ref" : "#/components/schemas/CommandWakeUp"
                  }
                },
                "required" : [ "Header", "CommandWakeUp" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseWakeUp" : {
                      "$ref" : "#/components/schemas/ResponseWakeUp"
                    }
                  },
                  "required" : [ "Header", "ResponseWakeUp" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    },
    "/shutdown" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Version" : {
                    "type" : "string"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "CommandShutDown" : {
                    "$ref" : "#/components/schemas/CommandShutDown"
                  }
                },
                "required" : [ "Header", "CommandShutDown" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Version" : {
                      "type" : "string"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseShutDown" : {
                      "$ref" : "#/components/schemas/ResponseShutDown"
                    }
                  },
                  "required" : [ "Header", "ResponseShutDown" ]
                }
              }
            },
            "description" : "TBD"
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "Resource" : {
        "type" : "object",
        "properties" : {
          "AmountPool" : {
            "$ref" : "#/components/schemas/AmountPool"
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "SpecificResource" : {
            "$ref" : "#/components/schemas/SpecificResource"
          },
          "Brand" : {
            "type" : "string"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Duration" : {
            "type" : "string",
            "format" : "duration"
          },
          "Expires" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "GrossWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "ResourceWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "Start" : {
            "type" : "string",
            "format" : "date-time"
          },
          "StartOffset" : {
            "type" : "string",
            "format" : "duration"
          },
          "Status" : {
            "type" : "string",
            "enum" : [ "Available", "Unavailable" ]
          },
          "Transformation" : {
            "$ref" : "#/components/schemas/matrix"
          }
        }
      },
      "Intent" : {
        "type" : "object",
        "properties" : {
          "ProductIntent" : {
            "$ref" : "#/components/schemas/ProductIntent"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "Name" : {
            "type" : "string"
          }
        },
        "required" : [ "Name" ]
      },
      "AmountPool" : {
        "type" : "object",
        "properties" : {
          "PartAmount" : {
            "$ref" : "#/components/schemas/PartAmount"
          }
        },
        "required" : [ "PartAmount" ]
      },
      "PartAmount" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "PartWaste" : {
            "$ref" : "#/components/schemas/PartWaste"
          },
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "MaxAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "MinAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "PartWaste" : {
        "type" : "object",
        "properties" : {
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "WasteDetails" : {
            "type" : "string"
          }
        },
        "required" : [ "Waste" ]
      },
      "Product" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Intent" : {
            "$ref" : "#/components/schemas/Intent"
          },
          "Amount" : {
            "type" : "integer"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "IsRoot" : {
            "type" : "boolean"
          },
          "MaxAmount" : {
            "type" : "integer"
          },
          "MinAmount" : {
            "type" : "integer"
          },
          "PartVersion" : {
            "type" : "string"
          },
          "ProductType" : {
            "type" : "string"
          },
          "ProductTypeDetails" : {
            "type" : "string"
          }
        }
      },
      "ProductList" : {
        "type" : "object",
        "properties" : {
          "Product" : {
            "$ref" : "#/components/schemas/Product"
          }
        },
        "required" : [ "Product" ]
      },
      "Dependent" : {
        "type" : "object",
        "properties" : {
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "PipeID" : {
            "type" : "string"
          },
          "PipeProtocol" : {
            "type" : "string"
          },
          "XJMFURL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "JobID" ]
      },
      "XJDF" : {
        "type" : "object",
        "properties" : {
          "AuditPool" : {
            "$ref" : "#/components/schemas/AuditPool"
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "ProductList" : {
            "$ref" : "#/components/schemas/ProductList"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "Category" : {
            "type" : "string"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ICSVersions" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "ProjectID" : {
            "type" : "string"
          },
          "RelatedJobID" : {
            "type" : "string"
          },
          "RelatedJobPartID" : {
            "type" : "string"
          },
          "RelatedProjectID" : {
            "type" : "string"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Version" : {
            "$ref" : "#/components/schemas/Version"
          }
        },
        "required" : [ "JobID", "Types" ]
      },
      "ResourceSet" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "Dependent" : {
            "$ref" : "#/components/schemas/Dependent"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Resource" : {
            "$ref" : "#/components/schemas/Resource"
          },
          "CombinedProcessIndex" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "Name" : {
            "type" : "string"
          },
          "ProcessUsage" : {
            "type" : "string"
          },
          "Unit" : {
            "type" : "string"
          },
          "Usage" : {
            "type" : "string",
            "enum" : [ "Input", "Output" ]
          }
        },
        "required" : [ "Name" ]
      },
      "DeviceFilter" : {
        "type" : "object",
        "properties" : {
          "DeviceDetails" : {
            "type" : "string",
            "enum" : [ "Brief", "Modules", "Full" ]
          }
        }
      },
      "DeviceInfo" : {
        "type" : "object",
        "properties" : {
          "Activity" : {
            "$ref" : "#/components/schemas/Activity"
          },
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "JobPhase" : {
            "$ref" : "#/components/schemas/JobPhase"
          },
          "CounterUnit" : {
            "type" : "string"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "HourCounter" : {
            "type" : "string",
            "format" : "duration"
          },
          "IdleStartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "PowerOnTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ProductionCounter" : {
            "type" : "number",
            "format" : "float"
          },
          "Speed" : {
            "type" : "number",
            "format" : "float"
          },
          "Status" : {
            "$ref" : "#/components/schemas/DeviceStatus"
          },
          "StatusDetails" : {
            "type" : "string"
          },
          "ToolIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "TotalProductionCounter" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Status" ]
      },
      "GangCmdFilter" : {
        "type" : "object",
        "properties" : {
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Policy" : {
            "type" : "string",
            "enum" : [ "All", "Optimized" ]
          }
        }
      },
      "GangInfo" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "GangName" : {
            "type" : "string"
          }
        },
        "required" : [ "GangName" ]
      },
      "GangQuFilter" : {
        "type" : "object",
        "properties" : {
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "XJMF" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          },
          "Version" : {
            "$ref" : "#/components/schemas/Version"
          }
        },
        "required" : [ "Header" ]
      },
      "JobPhase" : {
        "type" : "object",
        "properties" : {
          "Activity" : {
            "$ref" : "#/components/schemas/Activity"
          },
          "GangSource" : {
            "$ref" : "#/components/schemas/GangSource"
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "CostCenterID" : {
            "type" : "string"
          },
          "DeadLine" : {
            "type" : "string",
            "enum" : [ "InTime", "Late", "Warning" ]
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "PercentCompleted" : {
            "type" : "number",
            "format" : "float"
          },
          "QueueEntryID" : {
            "type" : "string"
          },
          "RelatedJobID" : {
            "type" : "string"
          },
          "RelatedJobPartID" : {
            "type" : "string"
          },
          "RestTime" : {
            "type" : "string",
            "format" : "duration"
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Status" : {
            "$ref" : "#/components/schemas/NodeStatus"
          },
          "StatusDetails" : {
            "type" : "string"
          },
          "ToolIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "WorkStepID" : {
            "type" : "string"
          }
        },
        "required" : [ "JobID", "Status" ]
      },
      "Activity" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "ActivityID" : {
            "type" : "string"
          },
          "ActivityName" : {
            "type" : "string"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "PersonalID" : {
            "type" : "string"
          },
          "Roles" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          }
        }
      },
      "Header" : {
        "type" : "object",
        "properties" : {
          "AgentName" : {
            "type" : "string"
          },
          "AgentVersion" : {
            "type" : "string"
          },
          "Author" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "DeviceID" : {
            "type" : "string"
          },
          "ICSVersions" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "PersonalID" : {
            "type" : "string"
          },
          "refID" : {
            "type" : "string"
          },
          "Time" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "DeviceID", "Time" ]
      },
      "MessageService" : {
        "type" : "object",
        "properties" : {
          "ResponseModes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "FireAndForget", "Reliable", "Response" ]
            }
          },
          "Type" : {
            "type" : "string"
          },
          "URLSchemes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "http", "https" ]
            }
          }
        },
        "required" : [ "Type" ]
      },
      "PipeParams" : {
        "type" : "object",
        "properties" : {
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Close", "Pause", "Pull", "Push" ]
          },
          "PipeID" : {
            "type" : "string"
          }
        },
        "required" : [ "JobID", "Operation", "PipeID" ]
      },
      "Queue" : {
        "type" : "object",
        "properties" : {
          "QueueEntry" : {
            "$ref" : "#/components/schemas/QueueEntry"
          },
          "MaxQueueSize" : {
            "type" : "integer"
          },
          "QueueSize" : {
            "type" : "integer"
          },
          "UpdateGranularity" : {
            "$ref" : "#/components/schemas/UpdateGranularity"
          }
        }
      },
      "QueueEntry" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "GangSource" : {
            "$ref" : "#/components/schemas/GangSource"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "GangName" : {
            "type" : "string"
          },
          "GangPolicy" : {
            "$ref" : "#/components/schemas/EnumGangPolicy"
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "Priority" : {
            "type" : "integer"
          },
          "QueueEntryID" : {
            "type" : "string"
          },
          "RelatedJobID" : {
            "type" : "string"
          },
          "RelatedJobPartID" : {
            "type" : "string"
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Status" : {
            "$ref" : "#/components/schemas/NodeStatus"
          },
          "StatusDetails" : {
            "type" : "string"
          },
          "SubmissionTime" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "QueueEntryID", "Status" ]
      },
      "QueueFilter" : {
        "type" : "object",
        "properties" : {
          "GangSource" : {
            "$ref" : "#/components/schemas/GangSource"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "FirstEntry" : {
            "type" : "string"
          },
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "LastEntry" : {
            "type" : "string"
          },
          "MaxEntries" : {
            "type" : "integer"
          },
          "MaxPriority" : {
            "type" : "integer"
          },
          "MinPriority" : {
            "type" : "integer"
          },
          "NewerThan" : {
            "type" : "string",
            "format" : "date-time"
          },
          "OlderThan" : {
            "type" : "string",
            "format" : "date-time"
          },
          "QueueEntryIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "StatusList" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/NodeStatus"
            }
          }
        }
      },
      "QueueSubmissionParams" : {
        "type" : "object",
        "properties" : {
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "GangName" : {
            "type" : "string"
          },
          "GangPolicy" : {
            "$ref" : "#/components/schemas/EnumGangPolicy"
          },
          "NextQueueEntryID" : {
            "type" : "string"
          },
          "PrevQueueEntryID" : {
            "type" : "string"
          },
          "Priority" : {
            "type" : "integer"
          },
          "ReturnJMF" : {
            "$ref" : "#/components/schemas/URL"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "URL" ]
      },
      "RequestQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "QueueURL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueURL" ]
      },
      "ResourceCmdParams" : {
        "type" : "object",
        "properties" : {
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "UpdateMethod" : {
            "type" : "string",
            "enum" : [ "Complete", "CompleteSet", "Incremental", "Remove", "RemoveSet" ]
          }
        },
        "required" : [ "ResourceSet", "UpdateMethod" ]
      },
      "ResourceInfo" : {
        "type" : "object",
        "properties" : {
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "CommandResult" : {
            "type" : "string",
            "enum" : [ "Merged", "New", "Rejected", "Removed", "Replaced" ]
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "Level" : {
            "type" : "string",
            "enum" : [ "Empty", "Full", "High", "Low", "OK" ]
          },
          "ModuleID" : {
            "type" : "string"
          },
          "QueueEntryID" : {
            "type" : "string"
          },
          "Scope" : {
            "$ref" : "#/components/schemas/Scope"
          },
          "Speed" : {
            "type" : "number",
            "format" : "float"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "TotalAmount" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "ResourceSet" ]
      },
      "ResourceQuParams" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "QueueEntryID" : {
            "type" : "string"
          },
          "ResourceDetails" : {
            "type" : "string",
            "enum" : [ "Brief", "Full" ]
          },
          "ResourceName" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Scope" : {
            "$ref" : "#/components/schemas/Scope"
          }
        },
        "required" : [ "Scope" ]
      },
      "ResubmissionParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string"
          },
          "UpdateMethod" : {
            "type" : "string",
            "enum" : [ "Complete", "Incremental", "Remove" ]
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueEntryID", "UpdateMethod", "URL" ]
      },
      "ReturnQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueEntryID", "URL" ]
      },
      "ShutDownCmdParams" : {
        "type" : "object",
        "properties" : {
          "ShutDownType" : {
            "type" : "string",
            "enum" : [ "StandBy", "Full" ]
          }
        }
      },
      "StatusQuParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string"
          }
        }
      },
      "StopPersChParams" : {
        "type" : "object",
        "properties" : {
          "ChannelID" : {
            "type" : "string"
          },
          "MessageType" : {
            "type" : "string"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "Subscription" : {
        "type" : "object",
        "properties" : {
          "ChannelMode" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/EnumChannelMode"
            }
          },
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "RepeatTime" : {
            "type" : "number",
            "format" : "float"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "URL" ]
      },
      "SubscriptionFilter" : {
        "type" : "object",
        "properties" : {
          "DeviceID" : {
            "type" : "string"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "SubscriptionInfo" : {
        "type" : "object",
        "properties" : {
          "Subscription" : {
            "$ref" : "#/components/schemas/Subscription"
          },
          "ChannelID" : {
            "type" : "string"
          },
          "DeviceID" : {
            "type" : "string"
          },
          "MessageType" : {
            "type" : "string"
          }
        },
        "required" : [ "Subscription", "ChannelID", "MessageType" ]
      },
      "AuditPool" : {
        "type" : "object"
      },
      "Band" : {
        "type" : "object",
        "properties" : {
          "Height" : {
            "type" : "integer"
          },
          "Width" : {
            "type" : "integer"
          }
        }
      },
      "BundleItem" : {
        "type" : "object",
        "properties" : {
          "BundleItem" : {
            "$ref" : "#/components/schemas/BundleItem"
          },
          "Amount" : {
            "type" : "integer"
          },
          "BundleType" : {
            "$ref" : "#/components/schemas/BundleType"
          },
          "ItemRef" : {
            "type" : "string",
            "format" : "id"
          },
          "TotalAmount" : {
            "type" : "integer"
          },
          "TotalDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "TotalVolume" : {
            "type" : "number",
            "format" : "float"
          },
          "TotalWeight" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Amount" ]
      },
      "CellCondition" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          },
          "Side" : {
            "$ref" : "#/components/schemas/Side"
          }
        },
        "required" : [ "Condition", "Side" ]
      },
      "CoilBindingDetails" : {
        "type" : "object",
        "properties" : {
          "CoilShape" : {
            "type" : "string"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Comment" : {
        "type" : "object"
      },
      "Condition" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "PartContext" : {
            "type" : "string"
          }
        },
        "required" : [ "Part" ]
      },
      "AuditCreated" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object"
        } ]
      },
      "EdgeGluing" : {
        "type" : "object",
        "properties" : {
          "EdgeGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          }
        }
      },
      "Emboss" : {
        "type" : "object",
        "properties" : {
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "Direction" : {
            "$ref" : "#/components/schemas/EnumEmbossDirection"
          },
          "EdgeAngle" : {
            "type" : "number",
            "format" : "float"
          },
          "EdgeShape" : {
            "type" : "string",
            "enum" : [ "Beveled", "Rounded" ]
          },
          "EmbossingType" : {
            "$ref" : "#/components/schemas/EmbossType"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToolRef" : {
            "type" : "string",
            "format" : "id"
          }
        },
        "required" : [ "Direction", "EmbossingType" ]
      },
      "EmbossingItem" : {
        "type" : "object",
        "properties" : {
          "Direction" : {
            "$ref" : "#/components/schemas/EnumEmbossDirection"
          },
          "EmbossingType" : {
            "$ref" : "#/components/schemas/EmbossType"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "FoilColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "FoilColorDetails" : {
            "type" : "string"
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Separation" : {
            "type" : "string"
          },
          "ToolName" : {
            "type" : "string"
          }
        },
        "required" : [ "EmbossingType" ]
      },
      "Event" : {
        "type" : "object",
        "properties" : {
          "EventID" : {
            "type" : "string"
          },
          "EventValue" : {
            "type" : "string"
          }
        },
        "required" : [ "EventID" ]
      },
      "FitPolicy" : {
        "type" : "object",
        "properties" : {
          "ClipOffset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ExpansionPolicy" : {
            "type" : "string",
            "enum" : [ "HorizontalOnly", "HorizontalVertical", "VerticalOnly", "VerticalHorizontal" ]
          },
          "GutterPolicy" : {
            "type" : "string",
            "enum" : [ "Distribute", "Fixed" ]
          },
          "HorizontalGridDirection" : {
            "type" : "string",
            "enum" : [ "LeftToRight", "RightToLeft" ]
          },
          "MinGutter" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "RotatePolicy" : {
            "type" : "string",
            "enum" : [ "NoRotate", "RotateOrthogonal", "RotateClockwise", "RotateCounterClockwise" ]
          },
          "SizePolicy" : {
            "type" : "string",
            "enum" : [ "Abort", "ClipToMaxPage", "CompleteGrid", "FillGrid", "FitToPage", "ReduceToFit", "Tile" ]
          },
          "VerticalGridDirection" : {
            "type" : "string",
            "enum" : [ "BottomToTop", "TopToBottom" ]
          }
        }
      },
      "HardCoverBinding" : {
        "type" : "object",
        "properties" : {
          "RegisterRibbon" : {
            "$ref" : "#/components/schemas/RegisterRibbon"
          },
          "BlockThreadSewing" : {
            "type" : "boolean"
          },
          "CoverStyle" : {
            "type" : "string"
          },
          "EndSheets" : {
            "type" : "boolean"
          },
          "HeadBands" : {
            "type" : "boolean"
          },
          "HeadBandColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "HeadBandColorDetails" : {
            "type" : "string"
          },
          "Jacket" : {
            "type" : "string",
            "enum" : [ "None", "Loose", "Glue" ]
          },
          "JacketFoldingWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "JapanBind" : {
            "type" : "boolean"
          },
          "SpineGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          },
          "SpineOperations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Thickness" : {
            "type" : "number",
            "format" : "float"
          },
          "TightBacking" : {
            "$ref" : "#/components/schemas/TightBacking"
          }
        }
      },
      "Icon" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "BitDepth" : {
            "type" : "integer"
          },
          "IconUsage" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/DeviceStatus"
            }
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "BitDepth", "Size" ]
      },
      "IconList" : {
        "type" : "object",
        "properties" : {
          "Icon" : {
            "$ref" : "#/components/schemas/Icon"
          }
        },
        "required" : [ "Icon" ]
      },
      "ImageCompression" : {
        "type" : "object",
        "properties" : {
          "CCITTFaxParams" : {
            "$ref" : "#/components/schemas/CCITTFaxParams"
          },
          "DCTParams" : {
            "$ref" : "#/components/schemas/DCTParams"
          },
          "FlateParams" : {
            "$ref" : "#/components/schemas/FlateParams"
          },
          "JBIG2Params" : {
            "$ref" : "#/components/schemas/JBIG2Params"
          },
          "JPEG2000Params" : {
            "$ref" : "#/components/schemas/JPEG2000Params"
          },
          "LZWParams" : {
            "$ref" : "#/components/schemas/LZWParams"
          },
          "AntiAliasImages" : {
            "type" : "boolean"
          },
          "AutoFilterImages" : {
            "type" : "boolean"
          },
          "ConvertImagesToIndexed" : {
            "type" : "boolean"
          },
          "DCTQuality" : {
            "type" : "number",
            "format" : "float"
          },
          "DownsampleImages" : {
            "type" : "boolean"
          },
          "EncodeImages" : {
            "type" : "boolean"
          },
          "ImageAutoFilterStrategy" : {
            "type" : "string"
          },
          "ImageDepth" : {
            "type" : "integer"
          },
          "ImageDownsampleThreshold" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageDownsampleType" : {
            "type" : "string",
            "enum" : [ "Average", "Bicubic", "Subsample" ]
          },
          "ImageFilter" : {
            "type" : "string"
          },
          "ImageResolution" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageType" : {
            "type" : "string",
            "enum" : [ "Color", "Grayscale", "Monochrome" ]
          },
          "JPXQuality" : {
            "type" : "integer"
          }
        }
      },
      "InterpretingDetails" : {
        "type" : "object",
        "properties" : {
          "MinLineWidth" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "JobField" : {
        "type" : "object",
        "properties" : {
          "JobFormat" : {
            "type" : "string"
          },
          "JobTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "MarkObject" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          },
          "CutMark" : {
            "$ref" : "#/components/schemas/CutMark"
          },
          "RegisterMark" : {
            "$ref" : "#/components/schemas/RegisterMark"
          },
          "ScavengerArea" : {
            "$ref" : "#/components/schemas/ScavengerArea"
          },
          "ContentRef" : {
            "type" : "string",
            "format" : "id"
          }
        }
      },
      "FillMark" : {
        "type" : "object",
        "properties" : {
          "MarkColor" : {
            "$ref" : "#/components/schemas/MarkColor"
          },
          "KnockoutBleed" : {
            "type" : "number",
            "format" : "float"
          },
          "KnockoutRefs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "format" : "id"
            }
          },
          "KnockoutSource" : {
            "type" : "string",
            "enum" : [ "ClipPath", "SourceClipPath", "TrimBox" ]
          }
        },
        "required" : [ "MarkColor", "KnockoutSource" ]
      },
      "MarkColor" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Tint" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Name", "Tint" ]
      },
      "Milestone" : {
        "type" : "object",
        "properties" : {
          "MilestoneType" : {
            "type" : "string"
          },
          "TypeAmount" : {
            "type" : "integer"
          }
        },
        "required" : [ "MilestoneType" ]
      },
      "Notification" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "Milestone" : {
            "$ref" : "#/components/schemas/Milestone"
          },
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Class" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "JobID" : {
            "type" : "string"
          },
          "JobPartID" : {
            "type" : "string"
          },
          "ModuleID" : {
            "type" : "string"
          },
          "QueueEntryID" : {
            "type" : "string"
          }
        },
        "required" : [ "Class" ]
      },
      "PageCondition" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          }
        },
        "required" : [ "Condition" ]
      },
      "PageActivation" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          }
        },
        "required" : [ "Condition" ]
      },
      "Part" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string"
          },
          "BlockName" : {
            "type" : "string"
          },
          "ContactType" : {
            "type" : "string"
          },
          "DocIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "DropID" : {
            "type" : "string"
          },
          "Location" : {
            "type" : "string"
          },
          "LotID" : {
            "type" : "string"
          },
          "Metadata" : {
            "$ref" : "#/components/schemas/regExp"
          },
          "Option" : {
            "type" : "string"
          },
          "PageNumber" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "PartVersion" : {
            "type" : "string"
          },
          "PreviewType" : {
            "type" : "string",
            "enum" : [ "Animation", "Identification", "SeparatedThumbNail", "Separation", "SeparationRaw", "Static3D", "ThumbNail", "Viewable" ]
          },
          "PrintCondition" : {
            "type" : "string"
          },
          "Product" : {
            "type" : "string"
          },
          "ProductPart" : {
            "type" : "string"
          },
          "QualityMeasurement" : {
            "type" : "string"
          },
          "Run" : {
            "type" : "string"
          },
          "RunIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "Separation" : {
            "type" : "string"
          },
          "SetIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "SheetIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "SheetName" : {
            "type" : "string"
          },
          "Side" : {
            "$ref" : "#/components/schemas/Side"
          },
          "StationName" : {
            "type" : "string"
          },
          "TileID" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "TransferCurveName" : {
            "type" : "string",
            "enum" : [ "Film", "Plate", "Press", "Substrate", "Proof" ]
          },
          "WebName" : {
            "type" : "string"
          }
        }
      },
      "PDFInterpretingParams" : {
        "type" : "object",
        "properties" : {
          "OCGControl" : {
            "$ref" : "#/components/schemas/OCGControl"
          },
          "ReferenceXObjParams" : {
            "$ref" : "#/components/schemas/ReferenceXObjParams"
          },
          "EmitPDFBG" : {
            "type" : "boolean"
          },
          "EmitPDFHalftones" : {
            "type" : "boolean"
          },
          "EmitPDFTransfers" : {
            "type" : "boolean"
          },
          "EmitPDFUCR" : {
            "type" : "boolean"
          },
          "HonorPDFOverprint" : {
            "type" : "boolean"
          },
          "ICCColorAsDeviceColor" : {
            "type" : "boolean"
          },
          "OCGIntent" : {
            "type" : "string"
          },
          "OCGProcess" : {
            "type" : "string"
          },
          "OCGZoom" : {
            "type" : "number",
            "format" : "float"
          },
          "PrintPDFAnnotations" : {
            "type" : "boolean"
          },
          "PrintTrapAnnotations" : {
            "type" : "boolean"
          },
          "TransparencyRenderingQuality" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "AuditStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          },
          "required" : [ "DeviceInfo" ]
        } ]
      },
      "AuditProcessRun" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "ProcessRun" : {
              "$ref" : "#/components/schemas/ProcessRun"
            }
          },
          "required" : [ "ProcessRun" ]
        } ]
      },
      "ProcessRun" : {
        "type" : "object",
        "properties" : {
          "Part" : {
            "$ref" : "#/components/schemas/Part"
          },
          "Duration" : {
            "type" : "string",
            "format" : "duration"
          },
          "End" : {
            "type" : "string",
            "format" : "date-time"
          },
          "EndStatus" : {
            "type" : "string",
            "enum" : [ "Aborted", "Completed" ]
          },
          "QueueEntryID" : {
            "type" : "string"
          },
          "ReturnTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Start" : {
            "type" : "string",
            "format" : "date-time"
          },
          "SubmissionTime" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "End", "EndStatus", "Start" ]
      },
      "RefAnchor" : {
        "type" : "object",
        "properties" : {
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "AnchorType" : {
            "type" : "string",
            "enum" : [ "Parent", "Sibling" ]
          },
          "rRef" : {
            "type" : "string",
            "format" : "id"
          }
        },
        "required" : [ "Anchor", "AnchorType", "rRef" ]
      },
      "RegisterRibbon" : {
        "type" : "object",
        "properties" : {
          "LengthOverall" : {
            "type" : "number",
            "format" : "float"
          },
          "Material" : {
            "type" : "string"
          },
          "RibbonColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "RibbonColorDetails" : {
            "type" : "string"
          },
          "RibbonEnd" : {
            "type" : "string"
          },
          "VisibleLength" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "AuditResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          },
          "required" : [ "ResourceInfo" ]
        } ]
      },
      "SoftCoverBinding" : {
        "type" : "object",
        "properties" : {
          "BlockThreadSewing" : {
            "type" : "boolean"
          },
          "EndSheets" : {
            "type" : "boolean"
          },
          "FoldingWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "FoldingWidthBack" : {
            "type" : "number",
            "format" : "float"
          },
          "GlueProcedure" : {
            "type" : "string",
            "enum" : [ "Spine", "SideOnly", "SingleSide", "SideSpine" ]
          },
          "Scoring" : {
            "type" : "string",
            "enum" : [ "TwiceScored", "QuadScored", "None" ]
          },
          "SpineGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          },
          "SpineOperations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "Tabs" : {
        "type" : "object",
        "properties" : {
          "ReinforceTabs" : {
            "type" : "boolean"
          },
          "ReinforceBind" : {
            "type" : "boolean"
          },
          "ReinforceColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "ReinforceColorDetails" : {
            "type" : "string"
          },
          "TabBrand" : {
            "type" : "string"
          },
          "TabCount" : {
            "type" : "integer"
          },
          "TabsPerBank" : {
            "type" : "integer"
          },
          "TabExtensionDistance" : {
            "type" : "number",
            "format" : "float"
          },
          "TabBodyCopy" : {
            "type" : "boolean"
          }
        }
      },
      "Module" : {
        "type" : "object",
        "properties" : {
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Manufacturer" : {
            "type" : "string"
          },
          "ManufacturerURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "ModuleID" : {
            "type" : "string"
          },
          "ModuleType" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Revision" : {
            "type" : "string"
          },
          "SerialNumber" : {
            "type" : "string"
          }
        },
        "required" : [ "ModuleID" ]
      },
      "AdhesiveNote" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          }
        }
      },
      "LooseBinding" : {
        "type" : "object",
        "properties" : {
          "HolePattern" : {
            "$ref" : "#/components/schemas/HolePattern"
          },
          "CoilBinding" : {
            "$ref" : "#/components/schemas/CoilBinding"
          },
          "CombBinding" : {
            "$ref" : "#/components/schemas/CombBinding"
          },
          "RingBinding" : {
            "$ref" : "#/components/schemas/RingBinding"
          },
          "Brand" : {
            "type" : "string"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "CoilBinding" : {
        "type" : "object",
        "properties" : {
          "CoilShape" : {
            "type" : "string"
          },
          "Material" : {
            "type" : "string",
            "enum" : [ "Steel", "ColorCoatedSteel", "Plastic" ]
          }
        }
      },
      "CombBinding" : {
        "type" : "object",
        "properties" : {
          "CombShape" : {
            "type" : "string"
          },
          "Material" : {
            "type" : "string",
            "enum" : [ "Steel", "ColorCoatedSteel", "Plastic" ]
          }
        }
      },
      "RingBinding" : {
        "type" : "object",
        "properties" : {
          "BinderMaterial" : {
            "type" : "string"
          },
          "RingShape" : {
            "type" : "string"
          },
          "RivetsExposed" : {
            "type" : "boolean"
          },
          "ViewBinder" : {
            "type" : "string"
          }
        }
      },
      "AssemblyItem" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "BindIn" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "ChildRef" : {
            "type" : "string",
            "format" : "id"
          },
          "Folio" : {
            "type" : "integer"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "BlowIn" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id"
          },
          "FolioFrom" : {
            "type" : "integer"
          },
          "FolioTo" : {
            "type" : "integer"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "StickOn" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "ChildRef" : {
            "type" : "string",
            "format" : "id"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Folio" : {
            "type" : "integer"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "Certification" : {
        "type" : "object",
        "properties" : {
          "Claim" : {
            "type" : "string"
          },
          "Identifier" : {
            "type" : "string"
          },
          "Organization" : {
            "type" : "string"
          }
        }
      },
      "PreflightItem" : {
        "type" : "object",
        "properties" : {
          "PreflightLevel" : {
            "type" : "string",
            "enum" : [ "Basic", "Extended", "Premium" ]
          }
        }
      },
      "ShapeCut" : {
        "type" : "object",
        "properties" : {
          "CutBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CutDepth" : {
            "type" : "string",
            "enum" : [ "Full", "Partial" ]
          },
          "CutOut" : {
            "type" : "boolean"
          },
          "CutPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "CutType" : {
            "type" : "string",
            "enum" : [ "Cut", "Perforate" ]
          },
          "ShapeType" : {
            "type" : "string",
            "enum" : [ "Line", "Path", "Rectangular", "Round", "RoundedRectangle" ]
          },
          "ShapeTypeDetails" : {
            "type" : "string"
          }
        },
        "required" : [ "ShapeType" ]
      },
      "Address" : {
        "type" : "object",
        "properties" : {
          "AddressLine" : {
            "$ref" : "#/components/schemas/AddressLine"
          },
          "AddressUsage" : {
            "type" : "string"
          },
          "City" : {
            "type" : "string"
          },
          "CivicNumber" : {
            "type" : "string"
          },
          "Country" : {
            "type" : "string"
          },
          "CountryCode" : {
            "type" : "string",
            "pattern" : "[A-Z][A-Z]"
          },
          "ExtendedAddress" : {
            "type" : "string"
          },
          "PostalCode" : {
            "type" : "string"
          },
          "PostBox" : {
            "type" : "string"
          },
          "Region" : {
            "type" : "string"
          },
          "Street" : {
            "type" : "string"
          }
        }
      },
      "AddressLine" : {
        "type" : "object"
      },
      "AdvancedParams" : {
        "type" : "object",
        "properties" : {
          "AllowPSXObjects" : {
            "type" : "boolean"
          },
          "AllowTransparency" : {
            "type" : "boolean"
          },
          "AutoPositionEPSInfo" : {
            "type" : "boolean"
          },
          "EmbedJobOptions" : {
            "type" : "boolean"
          },
          "EmitDSCWarnings" : {
            "type" : "boolean"
          },
          "LockDistillerParams" : {
            "type" : "boolean"
          },
          "ParseDSCCommentForDocInfo" : {
            "type" : "boolean"
          },
          "ParseDSCComments" : {
            "type" : "boolean"
          },
          "PassThroughJPEGImages" : {
            "type" : "boolean"
          },
          "PreserveCopyPage" : {
            "type" : "boolean"
          },
          "PreserveEPSInfo" : {
            "type" : "boolean"
          },
          "PreserveHalftoneInfo" : {
            "type" : "boolean"
          },
          "PreserveOPIComments" : {
            "type" : "boolean"
          },
          "PreserveOverprintSettings" : {
            "type" : "boolean"
          },
          "TransferFunctionInfo" : {
            "type" : "string",
            "enum" : [ "Preserve", "Remove", "Apply" ]
          },
          "UCRandBGInfo" : {
            "type" : "string",
            "enum" : [ "Preserve", "Remove" ]
          },
          "UsePrologue" : {
            "type" : "boolean"
          }
        }
      },
      "ApprovalPerson" : {
        "type" : "object",
        "properties" : {
          "ApprovalRole" : {
            "type" : "string",
            "enum" : [ "Approvinator", "Informative", "Obligated" ]
          },
          "ApprovalRoleDetails" : {
            "type" : "string"
          },
          "ContactRef" : {
            "type" : "string",
            "format" : "id"
          }
        },
        "required" : [ "ContactRef" ]
      },
      "AssemblySection" : {
        "type" : "object",
        "properties" : {
          "AssemblySection" : {
            "$ref" : "#/components/schemas/AssemblySection"
          },
          "BinderySignatureID" : {
            "type" : "string"
          },
          "CommonFolds" : {
            "type" : "integer",
            "minimum" : 2
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string"
          }
        },
        "required" : [ "BinderySignatureID" ]
      },
      "AutomatedOverPrintParams" : {
        "type" : "object",
        "properties" : {
          "KnockOutCMYKWhite" : {
            "type" : "boolean"
          },
          "LineArtBlackLevel" : {
            "type" : "number",
            "format" : "float"
          },
          "OverPrintBlackLineArt" : {
            "type" : "boolean"
          },
          "OverPrintBlackText" : {
            "type" : "boolean"
          },
          "TextBlackLevel" : {
            "type" : "number",
            "format" : "float"
          },
          "TextSizeThreshold" : {
            "type" : "integer"
          }
        }
      },
      "BarcodeDetails" : {
        "type" : "object",
        "properties" : {
          "BarcodeVersion" : {
            "type" : "string"
          },
          "ErrorCorrectionLevel" : {
            "type" : "string"
          },
          "XCells" : {
            "type" : "integer"
          },
          "YCells" : {
            "type" : "integer"
          }
        }
      },
      "BarcodeProductionParams" : {
        "type" : "object",
        "properties" : {
          "BarcodeReproParams" : {
            "$ref" : "#/components/schemas/BarcodeReproParams"
          },
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          }
        }
      },
      "BindingQuality" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "BindingQualityParams" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "BoxFoldAction" : {
        "type" : "object",
        "properties" : {
          "Action" : {
            "type" : "string",
            "enum" : [ "LongFoldLeftToRight", "LongFoldRightToLeft", "LongPreFoldLeftToRight", "LongPreFoldRightToLeft", "FrontFoldComplete", "FrontFoldDiagonal", "FrontFoldCompleteDiagonal", "BackFoldComplete", "BackFoldDiagonal", "BackFoldCompleteDiagonal", "ReverseFold", "Milling", "Rotate90", "Rotate180", "Rotate270" ]
          },
          "FoldIndex" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Action", "FoldIndex" ]
      },
      "ByteMap" : {
        "type" : "object",
        "properties" : {
          "Band" : {
            "$ref" : "#/components/schemas/Band"
          },
          "BandOrdering" : {
            "type" : "string",
            "enum" : [ "BandMajor", "ColorMajor" ]
          },
          "FrameHeight" : {
            "type" : "integer"
          },
          "FrameWidth" : {
            "type" : "integer"
          },
          "Halftoned" : {
            "type" : "boolean"
          },
          "Interleaved" : {
            "type" : "boolean"
          },
          "PixelColorants" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "PixelDepth" : {
            "type" : "integer"
          },
          "PixelSkip" : {
            "type" : "integer"
          },
          "Resolution" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "CCITTFaxParams" : {
        "type" : "object",
        "properties" : {
          "EncodedByteAlign" : {
            "type" : "boolean"
          },
          "EndOfBlock" : {
            "type" : "boolean"
          },
          "EndOfLine" : {
            "type" : "boolean"
          },
          "K" : {
            "type" : "integer"
          },
          "Uncompressed" : {
            "type" : "boolean"
          }
        }
      },
      "CIELABMeasuringField" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CIELab" : {
            "$ref" : "#/components/schemas/LabColor"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "Percentages" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "ScreenRuling" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "ScreenShape" : {
            "type" : "string"
          },
          "Tolerance" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Center", "CIELab" ]
      },
      "CollatingItem" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "integer"
          },
          "ComponentRef" : {
            "type" : "string",
            "format" : "id"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Transformation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "TransformationContext" : {
            "type" : "string",
            "enum" : [ "CollateItem", "Component", "StackItem" ]
          }
        }
      },
      "ColorantAlias" : {
        "type" : "object",
        "properties" : {
          "ColorantName" : {
            "type" : "string"
          },
          "RawName" : {
            "type" : "string"
          },
          "ReplacementColorantName" : {
            "type" : "string"
          }
        },
        "required" : [ "ColorantName", "ReplacementColorantName" ]
      },
      "ColorControlStrip" : {
        "type" : "object",
        "properties" : {
          "CIELABMeasuringField" : {
            "$ref" : "#/components/schemas/CIELABMeasuringField"
          },
          "ColorMeasurementConditions" : {
            "$ref" : "#/components/schemas/ColorMeasurementConditions"
          },
          "DensityMeasuringField" : {
            "$ref" : "#/components/schemas/DensityMeasuringField"
          },
          "Patch" : {
            "$ref" : "#/components/schemas/Patch"
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "StripType" : {
            "type" : "string"
          }
        }
      },
      "ColorMeasurement" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          }
        }
      },
      "ColorMeasurementConditions" : {
        "type" : "object",
        "properties" : {
          "Aperture" : {
            "type" : "number",
            "format" : "float"
          },
          "DensityStandard" : {
            "type" : "string"
          },
          "Illumination" : {
            "type" : "string"
          },
          "IlluminationAngle" : {
            "type" : "integer"
          },
          "InkState" : {
            "type" : "string",
            "enum" : [ "Dry", "Wet" ]
          },
          "MeasurementAngle" : {
            "type" : "integer"
          },
          "MeasurementFilter" : {
            "type" : "string",
            "enum" : [ "None", "Pol", "UV" ]
          },
          "MeasurementMode" : {
            "type" : "string"
          },
          "Observer" : {
            "type" : "integer"
          },
          "SampleBacking" : {
            "type" : "string",
            "enum" : [ "Black", "Substrate", "White" ]
          },
          "SpectralResolution" : {
            "type" : "number",
            "format" : "float"
          },
          "WhiteBase" : {
            "type" : "string",
            "enum" : [ "Absolute", "Substrate" ]
          }
        }
      },
      "ComChannel" : {
        "type" : "object",
        "properties" : {
          "ChannelType" : {
            "type" : "string"
          },
          "ChannelUsage" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Locator" : {
            "type" : "string"
          }
        },
        "required" : [ "ChannelType", "Locator" ]
      },
      "Company" : {
        "type" : "object",
        "properties" : {
          "OrganizationalUnit" : {
            "$ref" : "#/components/schemas/textElement"
          },
          "CompanyID" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "OrganizationName" : {
            "type" : "string"
          }
        },
        "required" : [ "OrganizationName" ]
      },
      "ContentMetadata" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "ContactRefs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "format" : "id"
            }
          },
          "ISBN" : {
            "type" : "string"
          },
          "Title" : {
            "type" : "string"
          }
        }
      },
      "ContentObject" : {
        "type" : "object"
      },
      "ConvertingConfig" : {
        "type" : "object",
        "properties" : {
          "CutBlock" : {
            "$ref" : "#/components/schemas/CutBlock"
          },
          "Device" : {
            "$ref" : "#/components/schemas/Device"
          },
          "Media" : {
            "$ref" : "#/components/schemas/Media"
          },
          "MarginBottom" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginLeft" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginRight" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginTop" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetHeightMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetHeightMin" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetWidthMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetWidthMin" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "CutBlock" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "BlockName" : {
            "type" : "string"
          },
          "Box" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CutWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "Operations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        },
        "required" : [ "BlockName" ]
      },
      "DCTParams" : {
        "type" : "object",
        "properties" : {
          "ColorTransform" : {
            "type" : "string",
            "enum" : [ "None", "YUV", "Automatic" ]
          },
          "HSamples" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "HuffTable" : {
            "type" : "string"
          },
          "QFactor" : {
            "type" : "number",
            "format" : "float"
          },
          "QuantTable" : {
            "type" : "string"
          },
          "VSamples" : {
            "$ref" : "#/components/schemas/IntegerList"
          }
        }
      },
      "DensityMeasuringField" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Density" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "DotGain" : {
            "type" : "number",
            "format" : "float"
          },
          "Separation" : {
            "type" : "string"
          },
          "ToleranceBlack" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceCyan" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceDotGain" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceMagenta" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceYellow" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Center", "Density", "Diameter", "DotGain", "Separation" ]
      },
      "DeviceNColor" : {
        "type" : "object",
        "properties" : {
          "ColorList" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Name" : {
            "type" : "string"
          }
        },
        "required" : [ "ColorList", "Name" ]
      },
      "DeviceNSpace" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        },
        "required" : [ "Name", "Separations" ]
      },
      "Disjointing" : {
        "type" : "object",
        "properties" : {
          "InsertSheet" : {
            "$ref" : "#/components/schemas/InsertSheet"
          },
          "Amount" : {
            "type" : "integer"
          },
          "Direction" : {
            "type" : "string",
            "enum" : [ "Alternate", "Left", "None", "Right" ]
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Units" : {
            "type" : "string"
          }
        }
      },
      "Disposition" : {
        "type" : "object",
        "properties" : {
          "DispositionAction" : {
            "type" : "string",
            "enum" : [ "Delete", "Archive" ]
          },
          "ExtraDuration" : {
            "type" : "string",
            "format" : "duration"
          },
          "MinDuration" : {
            "type" : "string",
            "format" : "duration"
          },
          "Priority" : {
            "type" : "integer"
          },
          "Until" : {
            "type" : "string",
            "format" : "date-time"
          }
        }
      },
      "DropItem" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "integer"
          },
          "ItemRef" : {
            "type" : "string",
            "format" : "id"
          },
          "TotalDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "TotalVolume" : {
            "type" : "number",
            "format" : "float"
          },
          "TotalWeight" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Amount", "ItemRef" ]
      },
      "Expr" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Path" : {
            "$ref" : "#/components/schemas/XPath"
          }
        },
        "required" : [ "Name", "Path" ]
      },
      "ExtraValues" : {
        "type" : "object",
        "properties" : {
          "Usage" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "string"
          }
        },
        "required" : [ "Usage", "Value" ]
      },
      "Feeder" : {
        "type" : "object",
        "properties" : {
          "FeederQualityParams" : {
            "$ref" : "#/components/schemas/FeederQualityParams"
          },
          "AlternatePositions" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "ComponentRef" : {
            "type" : "string",
            "format" : "id"
          },
          "FeederSynchronization" : {
            "type" : "string",
            "enum" : [ "Alternate", "Backup", "Chain", "Primary" ]
          },
          "FeederType" : {
            "type" : "string"
          },
          "Loading" : {
            "type" : "string"
          },
          "Opening" : {
            "type" : "string",
            "enum" : [ "Back", "Front", "None", "Sucker" ]
          },
          "Position" : {
            "type" : "integer"
          }
        }
      },
      "FeederQualityParams" : {
        "type" : "object",
        "properties" : {
          "BadFeedQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "BadFeeds" : {
            "type" : "integer"
          },
          "DoubleFeedQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "DoubleFeeds" : {
            "type" : "integer"
          },
          "IncorrectComponentQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "IncorrectComponents" : {
            "type" : "integer"
          }
        }
      },
      "FileSpec" : {
        "type" : "object",
        "properties" : {
          "Disposition" : {
            "$ref" : "#/components/schemas/Disposition"
          },
          "NetworkHeader" : {
            "$ref" : "#/components/schemas/NetworkHeader"
          },
          "CheckSum" : {
            "type" : "string"
          },
          "Encoding" : {
            "type" : "string"
          },
          "FileFormat" : {
            "type" : "string"
          },
          "FileSize" : {
            "type" : "integer",
            "format" : "int64"
          },
          "FileTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "MimeType" : {
            "type" : "string"
          },
          "OverwritePolicy" : {
            "type" : "string",
            "enum" : [ "Overwrite", "RenameNew", "RenameOld", "NewVersion", "OperatorIntervention", "Abort" ]
          },
          "Password" : {
            "type" : "string"
          },
          "ResourceUsage" : {
            "type" : "string"
          },
          "SearchDepth" : {
            "type" : "integer"
          },
          "UID" : {
            "type" : "string"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "UserFileName" : {
            "type" : "string"
          }
        }
      },
      "FlateParams" : {
        "type" : "object",
        "properties" : {
          "Predictor" : {
            "type" : "integer"
          }
        }
      },
      "FolderProduction" : {
        "type" : "object",
        "properties" : {
          "ModuleID" : {
            "type" : "string"
          },
          "ProductionType" : {
            "type" : "string",
            "enum" : [ "Collect", "NonCollect" ]
          }
        }
      },
      "GeneralID" : {
        "type" : "object",
        "properties" : {
          "DataType" : {
            "type" : "string",
            "enum" : [ "xs:string", "xs:int", "xs:float", "xs:NMTOKEN", "xs:boolean", "xs:dateTime", "xs:duration", "NamedFeature" ]
          },
          "IDUsage" : {
            "type" : "string"
          },
          "IDValue" : {
            "type" : "string"
          }
        },
        "required" : [ "IDUsage", "IDValue" ]
      },
      "IdentificationField" : {
        "type" : "object",
        "properties" : {
          "BarcodeDetails" : {
            "$ref" : "#/components/schemas/BarcodeDetails"
          },
          "ExtraValues" : {
            "$ref" : "#/components/schemas/ExtraValues"
          },
          "MetadataMap" : {
            "$ref" : "#/components/schemas/MetadataMap"
          },
          "BoundingBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "Encoding" : {
            "type" : "string",
            "enum" : [ "ASCII", "Barcode", "Braille", "RFID" ]
          },
          "EncodingDetails" : {
            "type" : "string"
          },
          "Format" : {
            "$ref" : "#/components/schemas/regExp"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "Position" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Purpose" : {
            "type" : "string",
            "enum" : [ "Label", "Separation", "Verification" ]
          },
          "PurposeDetails" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "string"
          },
          "ValueFormat" : {
            "type" : "string"
          },
          "ValueTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "ImageEnhancementOp" : {
        "type" : "object",
        "properties" : {
          "Operation" : {
            "type" : "string"
          },
          "OperationDetails" : {
            "type" : "string"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        },
        "required" : [ "Operation" ]
      },
      "InsertSheet" : {
        "type" : "object",
        "properties" : {
          "StripMark" : {
            "$ref" : "#/components/schemas/StripMark"
          },
          "IsWaste" : {
            "type" : "boolean"
          },
          "MediaRef" : {
            "type" : "string",
            "format" : "id"
          },
          "SheetFormat" : {
            "type" : "string"
          },
          "SheetType" : {
            "type" : "string",
            "enum" : [ "AccountingSheet", "ErrorSheet", "JobSheet", "SeparatorSheet" ]
          },
          "SheetUsage" : {
            "type" : "string",
            "enum" : [ "Header", "Interleaved", "InterleavedBefore", "OnError", "Slip", "SlipCopy", "Trailer" ]
          }
        },
        "required" : [ "SheetType", "SheetUsage" ]
      },
      "JBIG2Params" : {
        "type" : "object",
        "properties" : {
          "JBIG2Lossless" : {
            "type" : "boolean"
          }
        }
      },
      "JPEG2000Params" : {
        "type" : "object",
        "properties" : {
          "CodeBlockSize" : {
            "type" : "integer"
          },
          "LayerRates" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "LayersPerTile" : {
            "type" : "integer"
          },
          "NumResolutions" : {
            "type" : "integer"
          },
          "ProgressionOrder" : {
            "type" : "string",
            "enum" : [ "LRCP", "RLCP", "RPCL", "PCRL", "CPRL" ]
          },
          "TileSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "PlacedObject" : {
        "type" : "object",
        "properties" : {
          "PageActivation" : {
            "$ref" : "#/components/schemas/PageActivation"
          },
          "PageCondition" : {
            "$ref" : "#/components/schemas/PageCondition"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "ClipBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "ClipPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "HalfTonePhaseOrigin" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "Ord" : {
            "type" : "integer"
          },
          "PositionRef" : {
            "type" : "string",
            "format" : "id"
          },
          "SourceClipPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "TrimCTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "TrimSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "CTM" ]
      },
      "SheetActivation" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "$ref" : "#/components/schemas/Condition"
          }
        },
        "required" : [ "Condition" ]
      },
      "LZWParams" : {
        "type" : "object",
        "properties" : {
          "EarlyChange" : {
            "type" : "integer"
          },
          "Predictor" : {
            "type" : "integer"
          }
        }
      },
      "MediaLayers" : {
        "type" : "object"
      },
      "MetadataMap" : {
        "type" : "object",
        "properties" : {
          "Expr" : {
            "$ref" : "#/components/schemas/Expr"
          },
          "Name" : {
            "type" : "string"
          },
          "ValueFormat" : {
            "type" : "string"
          },
          "ValueTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        },
        "required" : [ "Name", "ValueFormat", "ValueTemplate" ]
      },
      "MISDetails" : {
        "type" : "object",
        "properties" : {
          "Complexity" : {
            "type" : "number",
            "format" : "float"
          },
          "CostType" : {
            "type" : "string",
            "enum" : [ "Chargeable", "NonChargeable" ]
          },
          "WorkType" : {
            "type" : "string",
            "enum" : [ "Original", "Alteration", "Rework" ]
          },
          "WorkTypeDetails" : {
            "type" : "string"
          }
        }
      },
      "MultiPageFold" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          }
        },
        "required" : [ "BinderySignatureID", "Orientation" ]
      },
      "NetworkHeader" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "string"
          }
        },
        "required" : [ "Name", "Value" ]
      },
      "NotificationFilter" : {
        "type" : "object",
        "properties" : {
          "Classes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "Event", "Information", "Warning", "Error", "Fatal" ]
            }
          },
          "MilestoneTypes" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "ObjectModel" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Dimensions" : {
            "$ref" : "#/components/schemas/shape"
          }
        }
      },
      "ObjectResolution" : {
        "type" : "object",
        "properties" : {
          "AntiAliasing" : {
            "type" : "string"
          },
          "Resolution" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        },
        "required" : [ "Resolution" ]
      },
      "OCGControl" : {
        "type" : "object",
        "properties" : {
          "IncludeOCG" : {
            "type" : "boolean"
          },
          "OCGName" : {
            "type" : "string"
          },
          "ProcStepsGroup" : {
            "type" : "string"
          },
          "ProcStepsType" : {
            "type" : "string"
          }
        },
        "required" : [ "IncludeOCG" ]
      },
      "Patch" : {
        "type" : "object",
        "properties" : {
          "SeparationTint" : {
            "$ref" : "#/components/schemas/SeparationTint"
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Density" : {
            "type" : "number",
            "format" : "float"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "Lab" : {
            "$ref" : "#/components/schemas/LabColor"
          },
          "NeutralDensity" : {
            "type" : "number",
            "format" : "float"
          },
          "PatchUsage" : {
            "type" : "string",
            "enum" : [ "Color", "Ignore", "Image", "Technical" ]
          },
          "RGB" : {
            "$ref" : "#/components/schemas/sRGBColor"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Spectrum" : {
            "$ref" : "#/components/schemas/TransferFunction"
          }
        },
        "required" : [ "PatchUsage" ]
      },
      "PDFXParams" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "PDFXBleedBoxtoTrimBoxOffset" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "PDFXCheck" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "PDFXCompliantPDFOnly" : {
            "type" : "boolean"
          },
          "PDFXNoTrimBoxError" : {
            "type" : "boolean"
          },
          "PDFXSetBleedBoxToMediaBox" : {
            "type" : "boolean"
          },
          "PDFXTrapped" : {
            "type" : "string",
            "enum" : [ "Unknown", "false", "true" ]
          },
          "PDFXTrimBoxToMediaBoxOffset" : {
            "$ref" : "#/components/schemas/rectangle"
          }
        }
      },
      "FontParams" : {
        "type" : "object",
        "properties" : {
          "AlwaysEmbed" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "EmbedAllFonts" : {
            "type" : "boolean"
          },
          "MaxSubsetPct" : {
            "type" : "integer"
          },
          "NeverEmbed" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        }
      },
      "Perforate" : {
        "type" : "object",
        "properties" : {
          "Depth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "TeethPerDimension" : {
            "type" : "number",
            "format" : "float"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Person" : {
        "type" : "object",
        "properties" : {
          "AdditionalNames" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "FamilyName" : {
            "type" : "string"
          },
          "FirstName" : {
            "type" : "string"
          },
          "JobTitle" : {
            "type" : "string"
          },
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "NamePrefix" : {
            "type" : "string"
          },
          "NameSuffix" : {
            "type" : "string"
          },
          "PhoneticFirstName" : {
            "type" : "string"
          },
          "PhoneticLastName" : {
            "type" : "string"
          }
        }
      },
      "Position" : {
        "type" : "object",
        "properties" : {
          "AbsoluteBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "BinderySignatureID" : {
            "type" : "string"
          },
          "BlockName" : {
            "type" : "string"
          },
          "GangElementID" : {
            "type" : "string"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "MarginBottom" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginLeft" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginRight" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginTop" : {
            "type" : "number",
            "format" : "float"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "PositionOrd" : {
            "type" : "integer"
          },
          "RelativeBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "StackDepth" : {
            "type" : "integer"
          },
          "StackOrd" : {
            "type" : "integer"
          }
        }
      },
      "PositionObj" : {
        "type" : "object",
        "properties" : {
          "RefAnchor" : {
            "$ref" : "#/components/schemas/RefAnchor"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "PageRange" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "PositionPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "RelativeSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "RotationPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "SizePolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          }
        }
      },
      "PreflightTest" : {
        "type" : "object",
        "properties" : {
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Action" : {
            "$ref" : "#/components/schemas/EnumPreflightAction"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "TestClass" : {
            "type" : "string"
          },
          "TestID" : {
            "type" : "string"
          }
        }
      },
      "PreflightCheck" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Action" : {
            "$ref" : "#/components/schemas/EnumPreflightAction"
          },
          "Count" : {
            "type" : "integer"
          },
          "Pages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "TestClass" : {
            "type" : "string"
          },
          "TestID" : {
            "type" : "string"
          }
        }
      },
      "ProductionPath" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ProductionPathID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "BindingQualityMeasurement" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ReferenceXObjParams" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Mode" : {
            "type" : "string"
          }
        },
        "required" : [ "Mode" ]
      },
      "Inspection" : {
        "type" : "object",
        "properties" : {
          "Defect" : {
            "$ref" : "#/components/schemas/Defect"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          }
        }
      },
      "Defect" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Box" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "DefectReason" : {
            "type" : "string"
          },
          "DefectType" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "FinishingDefect", "ImageDefect", "ImageFinishingDefect", "Other", "SheetDefect", "SubstrateDefect" ]
            }
          },
          "DefectTypeDetails" : {
            "type" : "string"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Score"
          },
          "Size" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "DefectType" ]
      },
      "MarkElement" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "MarkType" : {
            "type" : "string"
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "Separation" : {
            "type" : "string"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Center", "MarkType", "Separation" ]
      },
      "RegistrationQuality" : {
        "type" : "object",
        "properties" : {
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Reference" : {
            "type" : "string"
          }
        },
        "required" : [ "Offset", "Reference" ]
      },
      "RepeatDesc" : {
        "type" : "object",
        "properties" : {
          "AllowedRotate" : {
            "type" : "string",
            "enum" : [ "None", "Grain", "MinorGrain", "CrossGrain" ]
          },
          "GutterX" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterX2" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterY" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterY2" : {
            "type" : "number",
            "format" : "float"
          },
          "LayoutStyle" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "OrderQuantity" : {
            "type" : "integer"
          },
          "ShapeDefRef" : {
            "type" : "string",
            "format" : "id"
          },
          "UseBleed" : {
            "type" : "boolean"
          }
        },
        "required" : [ "ShapeDefRef" ]
      },
      "RuleLength" : {
        "type" : "object",
        "properties" : {
          "DDESCutType" : {
            "type" : "integer"
          },
          "Length" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "DDESCutType", "Length" ]
      },
      "ScreenSelector" : {
        "type" : "object",
        "properties" : {
          "Angle" : {
            "type" : "number",
            "format" : "float"
          },
          "DotSize" : {
            "type" : "number",
            "format" : "float"
          },
          "Frequency" : {
            "type" : "number",
            "format" : "float"
          },
          "ScreeningFamily" : {
            "type" : "string"
          },
          "ScreeningType" : {
            "type" : "string",
            "enum" : [ "Adaptive", "AM", "ErrorDiffusion", "FM", "HybridAM-FM", "HybridAMline-dot" ]
          },
          "Separation" : {
            "type" : "string"
          },
          "SourceFrequencyMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceFrequencyMin" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "SpotFunction" : {
            "type" : "string"
          }
        }
      },
      "ShapeTemplate" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "ShapeDimension" : {
            "$ref" : "#/components/schemas/ShapeDimension"
          },
          "InnerDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Name" : {
            "type" : "string"
          },
          "Standard" : {
            "type" : "string"
          }
        }
      },
      "ShapeDimension" : {
        "type" : "object",
        "properties" : {
          "Usage" : {
            "type" : "string"
          },
          "Value" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Usage", "Value" ]
      },
      "GangElement" : {
        "type" : "object",
        "properties" : {
          "GeneralID" : {
            "$ref" : "#/components/schemas/GeneralID"
          },
          "Media" : {
            "$ref" : "#/components/schemas/Media"
          },
          "RunList" : {
            "$ref" : "#/components/schemas/RunList"
          },
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "CollapseBleeds" : {
            "type" : "boolean"
          },
          "CustomerID" : {
            "type" : "string"
          },
          "DeliveryDate" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Dimension" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "DueDate" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ExternalID" : {
            "type" : "string"
          },
          "FillPriority" : {
            "type" : "integer"
          },
          "GangElementID" : {
            "type" : "string"
          },
          "GrainDirection" : {
            "$ref" : "#/components/schemas/MediaDirection"
          },
          "GroupCode" : {
            "type" : "string"
          },
          "JobID" : {
            "type" : "string"
          },
          "MaxQuantity" : {
            "type" : "integer"
          },
          "MediaRef" : {
            "type" : "string",
            "format" : "id"
          },
          "MinQuantity" : {
            "type" : "integer"
          },
          "NPage" : {
            "type" : "integer"
          },
          "NumberUp" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "OneSheet" : {
            "type" : "string"
          },
          "Operations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "OrderQuantity" : {
            "type" : "integer"
          },
          "PageDimension" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "PlacedQuantity" : {
            "type" : "integer"
          },
          "Priority" : {
            "type" : "integer"
          },
          "RotationPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "RunListRef" : {
            "type" : "string",
            "format" : "id"
          },
          "SeparationListBack" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "SeparationListFront" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        },
        "required" : [ "GangElementID", "OrderQuantity" ]
      },
      "SeparationTint" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string"
          },
          "Tint" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Name", "Tint" ]
      },
      "ShiftPoint" : {
        "type" : "object",
        "properties" : {
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "CTM", "Position" ]
      },
      "SignatureCell" : {
        "type" : "object",
        "properties" : {
          "CellCondition" : {
            "$ref" : "#/components/schemas/CellCondition"
          },
          "BackPages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "BackSpread" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "BleedFace" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedFoot" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedHead" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedSpine" : {
            "type" : "number",
            "format" : "float"
          },
          "FaceCells" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "FrontPages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "FrontSpread" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Mask" : {
            "type" : "string",
            "enum" : [ "BleedBox", "DieCut", "None", "PDL", "SourceBleedBox", "SourceTrimBox", "TrimBox" ]
          },
          "MaskBleed" : {
            "type" : "number",
            "format" : "float"
          },
          "MaskSeparation" : {
            "type" : "string"
          },
          "Orientation" : {
            "type" : "string",
            "enum" : [ "Down", "Left", "Right", "Up" ]
          },
          "Sides" : {
            "$ref" : "#/components/schemas/Sides"
          },
          "StationName" : {
            "type" : "string"
          },
          "TrimFace" : {
            "type" : "number",
            "format" : "float"
          },
          "TrimFoot" : {
            "type" : "number",
            "format" : "float"
          },
          "TrimHead" : {
            "type" : "number",
            "format" : "float"
          },
          "TrimSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Station" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "ShapeDefRef" : {
            "type" : "string",
            "format" : "id"
          },
          "StationName" : {
            "type" : "string"
          }
        },
        "required" : [ "StationName" ]
      },
      "StripMark" : {
        "type" : "object",
        "properties" : {
          "BarcodeReproParams" : {
            "$ref" : "#/components/schemas/BarcodeReproParams"
          },
          "FillMark" : {
            "$ref" : "#/components/schemas/FillMark"
          },
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          },
          "CutMark" : {
            "$ref" : "#/components/schemas/CutMark"
          },
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "JobField" : {
            "$ref" : "#/components/schemas/JobField"
          },
          "RefAnchor" : {
            "$ref" : "#/components/schemas/RefAnchor"
          },
          "RegisterMark" : {
            "$ref" : "#/components/schemas/RegisterMark"
          },
          "ScavengerArea" : {
            "$ref" : "#/components/schemas/ScavengerArea"
          },
          "AbsoluteHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "AbsoluteWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "Font" : {
            "type" : "string"
          },
          "FontSize" : {
            "type" : "number",
            "format" : "float"
          },
          "HorizontalFitPolicy" : {
            "$ref" : "#/components/schemas/EnumFitPolicy"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "MarkName" : {
            "type" : "string"
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "RelativeHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "RelativeWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "StripMarkDetails" : {
            "type" : "string"
          },
          "VerticalFitPolicy" : {
            "$ref" : "#/components/schemas/EnumFitPolicy"
          }
        }
      },
      "TabDimensions" : {
        "type" : "object",
        "properties" : {
          "TabEdge" : {
            "$ref" : "#/components/schemas/Edge"
          },
          "TabExtensionDistance" : {
            "type" : "number",
            "format" : "float"
          },
          "TabOffset" : {
            "type" : "number",
            "format" : "float"
          },
          "TabSetCollationOrder" : {
            "type" : "string",
            "enum" : [ "Forward", "Reverse" ]
          },
          "TabsPerBank" : {
            "type" : "integer"
          },
          "TabWidth" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ThinPDFParams" : {
        "type" : "object",
        "properties" : {
          "FilePerPage" : {
            "type" : "boolean"
          },
          "SidelineEPS" : {
            "type" : "boolean"
          },
          "SidelineFonts" : {
            "type" : "boolean"
          },
          "SidelineImages" : {
            "type" : "boolean"
          }
        }
      },
      "TIFFEmbeddedFile" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "TagNumber" : {
            "type" : "integer"
          },
          "TagType" : {
            "type" : "integer"
          }
        },
        "required" : [ "FileSpec", "TagNumber", "TagType" ]
      },
      "TIFFFormatParams" : {
        "type" : "object",
        "properties" : {
          "TIFFEmbeddedFile" : {
            "$ref" : "#/components/schemas/TIFFEmbeddedFile"
          },
          "TIFFtag" : {
            "$ref" : "#/components/schemas/TIFFtag"
          },
          "ByteOrder" : {
            "type" : "string",
            "enum" : [ "II", "MM" ]
          },
          "Interleaving" : {
            "type" : "integer"
          },
          "RowsPerStrip" : {
            "type" : "integer"
          },
          "Segmentation" : {
            "type" : "string",
            "enum" : [ "SingleStrip", "Stripped", "Tiled" ]
          },
          "SeparationNameTag" : {
            "type" : "integer"
          },
          "TileSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WhiteIsZero" : {
            "type" : "boolean"
          }
        }
      },
      "TIFFtag" : {
        "type" : "object",
        "properties" : {
          "BinaryValue" : {
            "type" : "string"
          },
          "IntegerValue" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "NumberValue" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "StringValue" : {
            "type" : "string"
          },
          "TagNumber" : {
            "type" : "integer"
          },
          "TagType" : {
            "type" : "integer"
          }
        },
        "required" : [ "TagNumber", "TagType" ]
      },
      "ChannelBindingDetails" : {
        "type" : "object",
        "properties" : {
          "ClampD" : {
            "type" : "number",
            "format" : "float"
          },
          "ClampSize" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Cover" : {
            "type" : "boolean"
          }
        }
      },
      "Crease" : {
        "type" : "object",
        "properties" : {
          "Depth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Cut" : {
        "type" : "object",
        "properties" : {
          "CutWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "CutMark" : {
        "type" : "object",
        "properties" : {
          "MarkType" : {
            "type" : "string",
            "enum" : [ "CrossCutMark", "TopVerticalCutMark", "BottomVerticalCutMark", "LeftHorizontalCutMark", "RightHorizontalCutMark", "LowerLeftCutMark", "UpperLeftCutMark", "LowerRightCutMark", "UpperRightCutMark" ]
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "MarkType", "Position" ]
      },
      "Fold" : {
        "type" : "object",
        "properties" : {
          "From" : {
            "type" : "string",
            "enum" : [ "Front", "Left" ]
          },
          "To" : {
            "type" : "string",
            "enum" : [ "Up", "Down" ]
          },
          "Travel" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "From", "To" ]
      },
      "Glue" : {
        "type" : "object",
        "properties" : {
          "AreaGlue" : {
            "type" : "boolean"
          },
          "GlueLineWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "GlueRef" : {
            "type" : "string",
            "format" : "id"
          },
          "GlueType" : {
            "type" : "string",
            "enum" : [ "ColdGlue", "Hotmelt", "Permanent", "PUR", "Removable" ]
          },
          "GluingPattern" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "GluingTechnique" : {
            "type" : "string",
            "enum" : [ "SpineGluing", "SideGluingFront", "SideGluingBack" ]
          },
          "MeltingTemperature" : {
            "type" : "integer"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/Face"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "HolePattern" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CenterReference" : {
            "type" : "string",
            "enum" : [ "RegistrationMark", "TrailingEdge" ]
          },
          "Extent" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "HoleCount" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Pattern" : {
            "type" : "string",
            "enum" : [ "None", "S1-generic", "S-generic", "R2-generic", "R2m-DIN", "R2m-ISO", "R2m-MIB", "R2i-US-a", "R2i-US-b", "R3-generic", "R3i-US", "R4-generic", "R4m-DIN-A4", "R4m-DIN-A5", "R4m-swedish", "R4i-US", "R5-generic", "R5i-US-a", "R5i-US-b", "R5i-US-c", "R6-generic", "R6m-4h2s", "R6m-DIN-A5", "R7-generic", "R7i-US-a", "R7i-US-b", "R7i-US-c", "R11m-7h4s", "P16_9i-rect-0t", "P12m-rect-0t", "W2_1i-round-0t", "W2_1i-square-0t", "W3_1i-square-0t", "C9.5m-round-0t" ]
          },
          "Pitch" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ReferenceEdge" : {
            "type" : "string",
            "enum" : [ "Bottom", "Left", "Pattern", "Right", "Top" ]
          },
          "Reinforcement" : {
            "type" : "string"
          },
          "Shape" : {
            "type" : "string",
            "enum" : [ "Elliptic", "Rectangular", "Round" ]
          }
        }
      },
      "CombBindingDetails" : {
        "type" : "object",
        "properties" : {
          "CombShape" : {
            "type" : "string"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "FlipBackCover" : {
            "type" : "boolean"
          }
        }
      },
      "RingBindingDetails" : {
        "type" : "object",
        "properties" : {
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "RingMechanic" : {
            "type" : "boolean"
          },
          "RingShape" : {
            "type" : "string"
          },
          "RivetsExposed" : {
            "type" : "boolean"
          },
          "SpineWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "ViewBinder" : {
            "type" : "string"
          }
        }
      },
      "StripBindingDetails" : {
        "type" : "object",
        "properties" : {
          "Length" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "SaddleStitching" : {
        "type" : "object",
        "properties" : {
          "StapleShape" : {
            "$ref" : "#/components/schemas/StapleShape"
          },
          "StitchNumber" : {
            "type" : "integer"
          }
        }
      },
      "Score" : {
        "type" : "integer",
        "minimum" : 0,
        "maximum" : 100
      },
      "SideStitching" : {
        "type" : "object",
        "properties" : {
          "StapleShape" : {
            "$ref" : "#/components/schemas/StapleShape"
          },
          "StitchNumber" : {
            "type" : "integer"
          }
        }
      },
      "ColorCorrectionOp" : {
        "type" : "object",
        "properties" : {
          "AdjustContrast" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustHue" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustLightness" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustSaturation" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        }
      },
      "ColorSpaceConversionOp" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "ScreenSelector" : {
            "$ref" : "#/components/schemas/ScreenSelector"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Convert", "Tag", "Untag" ]
          },
          "PreserveBlack" : {
            "type" : "boolean"
          },
          "RenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          },
          "RGBGray2Black" : {
            "type" : "boolean"
          },
          "RGBGray2BlackThreshold" : {
            "type" : "number",
            "format" : "float"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "SourceCS" : {
            "type" : "string",
            "enum" : [ "All", "CalGray", "Calibrated", "CalRGB", "CIEBased", "CMYK", "DeviceCMYK", "DeviceGray", "DeviceN", "DeviceRGB", "DevIndep", "Gray", "ICCBased", "ICCCMYK", "ICCGray", "ICCLAB", "ICCRGB", "Lab", "RGB", "Separation", "YUV" ]
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "SourceRenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          }
        },
        "required" : [ "Operation" ]
      },
      "PSCreationDetails" : {
        "type" : "object",
        "properties" : {
          "BinaryOK" : {
            "type" : "boolean"
          },
          "BoundingBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CenterCropBox" : {
            "type" : "boolean"
          },
          "GeneratePageStreams" : {
            "type" : "boolean"
          },
          "IgnoreAnnotForms" : {
            "type" : "boolean"
          },
          "IgnoreBG" : {
            "type" : "boolean"
          },
          "IgnoreColorSeps" : {
            "type" : "boolean"
          },
          "IgnoreDSC" : {
            "type" : "boolean"
          },
          "IgnoreExternStreamRef" : {
            "type" : "boolean"
          },
          "IgnoreHalftones" : {
            "type" : "boolean"
          },
          "IgnoreOverprint" : {
            "type" : "boolean"
          },
          "IgnorePageRotation" : {
            "type" : "boolean"
          },
          "IgnoreRawData" : {
            "type" : "boolean"
          },
          "IgnoreSeparableImagesOnly" : {
            "type" : "boolean"
          },
          "IgnoreShowPage" : {
            "type" : "boolean"
          },
          "IgnoreTransfers" : {
            "type" : "boolean"
          },
          "IgnoreTTFontsFirst" : {
            "type" : "boolean"
          },
          "IgnoreUCR" : {
            "type" : "boolean"
          },
          "IncludeBaseFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeCIDFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeEmbeddedFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeOtherResources" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeProcSets" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeTrueTypeFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeType1Fonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeType3Fonts" : {
            "type" : "string",
            "enum" : [ "IncludeOncePerPage" ]
          },
          "OutputType" : {
            "type" : "string",
            "enum" : [ "EPS", "PostScript" ]
          },
          "PSLevel" : {
            "type" : "integer"
          },
          "Scale" : {
            "type" : "number",
            "format" : "float"
          },
          "SetPageSize" : {
            "type" : "boolean"
          },
          "SetupProcsets" : {
            "type" : "boolean"
          },
          "ShrinkToFit" : {
            "type" : "boolean"
          },
          "SuppressCenter" : {
            "type" : "boolean"
          },
          "SuppressRotate" : {
            "type" : "boolean"
          },
          "TTasT42" : {
            "type" : "boolean"
          },
          "UseFontAliasNames" : {
            "type" : "boolean"
          }
        }
      },
      "PDFCreationDetails" : {
        "type" : "object",
        "properties" : {
          "AdvancedParams" : {
            "$ref" : "#/components/schemas/AdvancedParams"
          },
          "PDFXParams" : {
            "$ref" : "#/components/schemas/PDFXParams"
          },
          "ThinPDFParams" : {
            "$ref" : "#/components/schemas/ThinPDFParams"
          },
          "AllowJBIG2Globals" : {
            "type" : "boolean"
          },
          "ASCII85EncodePages" : {
            "type" : "boolean"
          },
          "AutoRotatePages" : {
            "type" : "string",
            "enum" : [ "None", "All", "PageByPage" ]
          },
          "Binding" : {
            "type" : "string",
            "enum" : [ "Left", "Right" ]
          },
          "CompressPages" : {
            "type" : "boolean"
          },
          "DefaultRenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          },
          "DetectBlend" : {
            "type" : "boolean"
          },
          "DoThumbnails" : {
            "type" : "boolean"
          },
          "InitialPageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "InitialResolution" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Optimize" : {
            "type" : "boolean"
          },
          "OverPrintMode" : {
            "type" : "integer"
          },
          "PDFVersion" : {
            "type" : "string"
          }
        }
      },
      "ModifyQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "QueueFilter" : {
            "$ref" : "#/components/schemas/QueueFilter"
          },
          "GangName" : {
            "type" : "string"
          },
          "NextQueueEntryID" : {
            "type" : "string"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Abort", "Complete", "Hold", "Move", "Remove", "Resume", "SetGang", "Suspend" ]
          },
          "Position" : {
            "type" : "integer"
          },
          "PrevQueueEntryID" : {
            "type" : "string"
          },
          "Priority" : {
            "type" : "integer"
          }
        },
        "required" : [ "QueueFilter", "Operation" ]
      },
      "AuditNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            }
          },
          "required" : [ "Notification" ]
        } ]
      },
      "QueueStatusParams" : {
        "type" : "object",
        "properties" : {
          "QueueFilter" : {
            "$ref" : "#/components/schemas/QueueFilter"
          },
          "UpdateGranularity" : {
            "$ref" : "#/components/schemas/UpdateGranularity"
          }
        }
      },
      "GangSource" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string"
          },
          "Copies" : {
            "type" : "integer"
          },
          "JobID" : {
            "type" : "string"
          }
        },
        "required" : [ "Copies", "JobID" ]
      },
      "SpecificResource" : {
        "type" : "object"
      },
      "ProductIntent" : {
        "type" : "object"
      },
      "CustomerInfo" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CustomerID" : {
              "type" : "string"
            },
            "CustomerJobName" : {
              "type" : "string"
            },
            "CustomerOrderID" : {
              "type" : "string"
            },
            "CustomerProjectID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "NodeInfo" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "GangSource" : {
              "$ref" : "#/components/schemas/GangSource"
            },
            "MISDetails" : {
              "$ref" : "#/components/schemas/MISDetails"
            },
            "CleanupDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "DueLevel" : {
              "type" : "string",
              "enum" : [ "Trivial", "Penalty", "JobCancelled" ]
            },
            "End" : {
              "type" : "string",
              "format" : "date-time"
            },
            "FirstEnd" : {
              "type" : "string",
              "format" : "date-time"
            },
            "FirstStart" : {
              "type" : "string",
              "format" : "date-time"
            },
            "JobPriority" : {
              "type" : "integer"
            },
            "LastEnd" : {
              "type" : "string",
              "format" : "date-time"
            },
            "LastStart" : {
              "type" : "string",
              "format" : "date-time"
            },
            "NaturalLang" : {
              "$ref" : "#/components/schemas/language"
            },
            "PersonalID" : {
              "type" : "string"
            },
            "SetupDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "Start" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Status" : {
              "$ref" : "#/components/schemas/NodeStatus"
            },
            "StatusDetails" : {
              "type" : "string"
            },
            "TotalDuration" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "Shape" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "CutOut" : {
              "type" : "boolean"
            },
            "CutPath" : {
              "$ref" : "#/components/schemas/PDFPath"
            },
            "DDESCutType" : {
              "type" : "integer"
            },
            "ShapeDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "ShapeType" : {
              "type" : "string",
              "enum" : [ "Path", "Rectangular", "Round", "RoundedRectangle" ]
            },
            "TeethPerDimension" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "ShapeType" ]
        } ]
      },
      "Message" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          }
        },
        "required" : [ "Header" ]
      },
      "Command" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object"
        } ]
      },
      "Query" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "Subscription" : {
              "$ref" : "#/components/schemas/Subscription"
            }
          }
        } ]
      },
      "Response" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            },
            "ReturnCode" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Signal" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "ChannelMode" : {
              "$ref" : "#/components/schemas/EnumChannelMode"
            }
          }
        } ]
      },
      "Audit" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          }
        },
        "required" : [ "Header" ]
      },
      "BlockPreparationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "RegisterRibbon" : {
              "$ref" : "#/components/schemas/RegisterRibbon"
            },
            "Backing" : {
              "type" : "number",
              "format" : "float"
            },
            "Rounding" : {
              "type" : "number",
              "format" : "float"
            },
            "TightBacking" : {
              "$ref" : "#/components/schemas/TightBacking"
            }
          }
        } ]
      },
      "BoxPackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BoxType" : {
              "type" : "string",
              "enum" : [ "Box", "Carton", "Envelope", "Tube" ]
            },
            "BoxTypeDetails" : {
              "type" : "string"
            },
            "Columns" : {
              "type" : "integer"
            },
            "ComponentsPerRow" : {
              "type" : "integer"
            },
            "Copies" : {
              "type" : "integer"
            },
            "FaceDown" : {
              "$ref" : "#/components/schemas/Face"
            },
            "Layers" : {
              "type" : "integer"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Pattern" : {
              "type" : "string"
            },
            "Rows" : {
              "type" : "integer"
            },
            "Ties" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "UnderLays" : {
              "$ref" : "#/components/schemas/IntegerList"
            }
          },
          "required" : [ "BoxType" ]
        } ]
      },
      "Bundle" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BundleItem" : {
              "$ref" : "#/components/schemas/BundleItem"
            }
          },
          "required" : [ "BundleItem" ]
        } ]
      },
      "CaseMakingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "BottomFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "CornerType" : {
              "type" : "string"
            },
            "CoverWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "FrontFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "JointWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "SpineWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "TopFoldIn" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "CasingInParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "CaseRadius" : {
              "type" : "number",
              "format" : "float"
            },
            "CoverWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "SpineWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "CoverApplicationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "Score" : {
              "$ref" : "#/components/schemas/Score"
            }
          }
        } ]
      },
      "CreasingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Crease" : {
              "$ref" : "#/components/schemas/Crease"
            }
          },
          "required" : [ "Crease" ]
        } ]
      },
      "CuttingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "DevelopingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PostBakeTemp" : {
              "type" : "number",
              "format" : "float"
            },
            "PostBakeTime" : {
              "type" : "string",
              "format" : "duration"
            },
            "PostExposeTime" : {
              "type" : "string",
              "format" : "duration"
            },
            "PreHeatTemp" : {
              "type" : "number",
              "format" : "float"
            },
            "PreHeatTime" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "Device" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "IconList" : {
              "$ref" : "#/components/schemas/IconList"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "Module" : {
              "$ref" : "#/components/schemas/Module"
            },
            "CostCenterID" : {
              "type" : "string"
            },
            "DescriptiveName" : {
              "type" : "string"
            },
            "DeviceClass" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "DeviceID" : {
              "type" : "string"
            },
            "DeviceType" : {
              "type" : "string"
            },
            "ICSVersions" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "JDFVersions" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "2.0" ]
              }
            },
            "KnownLocalizations" : {
              "$ref" : "#/components/schemas/languages"
            },
            "Manufacturer" : {
              "type" : "string"
            },
            "ManufacturerURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "MaxRunSpeed" : {
              "type" : "number",
              "format" : "float"
            },
            "Packaging" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "XML", "Zip" ]
              }
            },
            "PresentationURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "Revision" : {
              "type" : "string"
            },
            "SerialNumber" : {
              "type" : "string"
            },
            "URLSchemes" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "XJMFURL" : {
              "$ref" : "#/components/schemas/URL"
            }
          },
          "required" : [ "DeviceID" ]
        } ]
      },
      "EmbossingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Emboss" : {
              "$ref" : "#/components/schemas/Emboss"
            },
            "ModuleID" : {
              "type" : "string"
            }
          },
          "required" : [ "Emboss" ]
        } ]
      },
      "EndSheetGluingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            }
          },
          "required" : [ "Glue" ]
        } ]
      },
      "GluingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "GluingProductionID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "HeadBandApplicationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            },
            "Width" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "InsertingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "FinishedPage" : {
              "type" : "integer"
            },
            "InsertLocation" : {
              "type" : "string",
              "enum" : [ "Back", "FinishedPage", "Front", "Overfold" ]
            },
            "Method" : {
              "type" : "string",
              "enum" : [ "BindIn", "BlowIn" ]
            }
          },
          "required" : [ "InsertLocation" ]
        } ]
      },
      "InterpretingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "InterpretingDetails" : {
              "$ref" : "#/components/schemas/InterpretingDetails"
            },
            "ObjectResolution" : {
              "$ref" : "#/components/schemas/ObjectResolution"
            },
            "PDFInterpretingParams" : {
              "$ref" : "#/components/schemas/PDFInterpretingParams"
            },
            "Center" : {
              "type" : "boolean"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "PrintQuality" : {
              "$ref" : "#/components/schemas/PrintQuality"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id"
            },
            "Scaling" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ScalingOrigin" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "JacketingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FoldingDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "FoldingWidth" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "FoldingWidth" ]
        } ]
      },
      "LabelingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Application" : {
              "type" : "string"
            },
            "Face" : {
              "$ref" : "#/components/schemas/Face"
            },
            "Offset" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "LaminatingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "GapList" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "LaminatingBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "LaminatingMethod" : {
              "type" : "string",
              "enum" : [ "CompoundFoil", "DispersionGlue", "Fusing" ]
            },
            "ModuleID" : {
              "type" : "string"
            },
            "NipWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "Temperature" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Pallet" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "PalletType" : {
              "type" : "string"
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "PalletType" ]
        } ]
      },
      "PalletizingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "LayerAmount" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "MaxHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Overhang" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "OverhangOffset" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Pattern" : {
              "type" : "string"
            }
          }
        } ]
      },
      "PerforatingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Perforate" : {
              "$ref" : "#/components/schemas/Perforate"
            }
          },
          "required" : [ "Perforate" ]
        } ]
      },
      "ProofItem" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Amount" : {
            "type" : "integer"
          },
          "ColorType" : {
            "type" : "string",
            "enum" : [ "Monochrome", "BasicColor", "MatchedColor" ]
          },
          "Contract" : {
            "type" : "boolean"
          },
          "HalfTone" : {
            "type" : "boolean"
          },
          "ID" : {
            "type" : "string",
            "format" : "id"
          },
          "PageIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "ProofTarget" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "ScavengerArea" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Center" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "Center" ]
        } ]
      },
      "ShapeCuttingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Shape" : {
              "$ref" : "#/components/schemas/Shape"
            },
            "DeliveryMode" : {
              "type" : "string",
              "enum" : [ "FullSheet", "RemoveGripperMargin", "SeparateBlanks" ]
            },
            "DieLayoutRef" : {
              "type" : "string",
              "format" : "id"
            },
            "ModuleID" : {
              "type" : "string"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "ShrinkingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ShrinkingMethod" : {
              "type" : "string",
              "enum" : [ "ShrinkCool", "ShrinkHot" ]
            },
            "Temperature" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "SpinePreparationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MillingDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "NotchingDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "NotchingDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "Operations" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "SealingTemperature" : {
              "type" : "integer"
            },
            "StartPosition" : {
              "type" : "number",
              "format" : "float"
            },
            "WorkingLength" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "SpineTapingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "HorizontalExcess" : {
              "type" : "number",
              "format" : "float"
            },
            "HorizontalExcessBack" : {
              "type" : "number",
              "format" : "float"
            },
            "StripLength" : {
              "type" : "number",
              "format" : "float"
            },
            "TopExcess" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "StackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Disjointing" : {
              "$ref" : "#/components/schemas/Disjointing"
            },
            "BundleType" : {
              "$ref" : "#/components/schemas/BundleType"
            },
            "Compensate" : {
              "type" : "boolean"
            },
            "LayerAmount" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "LayerCompression" : {
              "type" : "boolean"
            },
            "LayerLift" : {
              "type" : "boolean"
            },
            "MaxAmount" : {
              "type" : "integer"
            },
            "MaxHeight" : {
              "type" : "integer"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "MinAmount" : {
              "type" : "integer"
            },
            "OutputBin" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "PreStackAmount" : {
              "type" : "integer"
            },
            "PreStackMethod" : {
              "type" : "string",
              "enum" : [ "All", "First", "None" ]
            },
            "StackAmount" : {
              "type" : "integer"
            },
            "StackCompression" : {
              "type" : "boolean"
            },
            "StandardAmount" : {
              "type" : "integer"
            },
            "UnderLays" : {
              "$ref" : "#/components/schemas/IntegerList"
            }
          }
        } ]
      },
      "StrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "StrappingType" : {
              "type" : "string",
              "enum" : [ "Single", "Double", "Cross", "DoubleCross" ]
            },
            "StrapPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            }
          },
          "required" : [ "StrappingType" ]
        } ]
      },
      "ThreadSealingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlindStitch" : {
              "type" : "boolean"
            },
            "ThreadLength" : {
              "type" : "number",
              "format" : "float"
            },
            "ThreadPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ThreadStitchWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Tool" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "ToolType" : {
              "type" : "string"
            }
          }
        } ]
      },
      "VarnishingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ModuleID" : {
              "type" : "string"
            },
            "ModuleType" : {
              "type" : "string",
              "enum" : [ "PrintModule", "CoatingModule" ]
            },
            "VarnishArea" : {
              "type" : "string",
              "enum" : [ "Full", "Spot" ]
            },
            "VarnishMethod" : {
              "type" : "string",
              "enum" : [ "Blanket", "Plate", "Independent" ]
            }
          }
        } ]
      },
      "VerificationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Tolerance" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "VerificationResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "Accepted" : {
              "type" : "integer"
            },
            "Rejected" : {
              "type" : "integer"
            },
            "Unknown" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "WrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "WrappingKind" : {
              "type" : "string",
              "enum" : [ "Band", "LooseWrap", "ShrinkWrap" ]
            }
          },
          "required" : [ "WrappingKind" ]
        } ]
      },
      "BindingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "AdhesiveNote" : {
              "$ref" : "#/components/schemas/AdhesiveNote"
            },
            "EdgeGluing" : {
              "$ref" : "#/components/schemas/EdgeGluing"
            },
            "HardCoverBinding" : {
              "$ref" : "#/components/schemas/HardCoverBinding"
            },
            "LooseBinding" : {
              "$ref" : "#/components/schemas/LooseBinding"
            },
            "SaddleStitching" : {
              "$ref" : "#/components/schemas/SaddleStitching"
            },
            "SideStitching" : {
              "$ref" : "#/components/schemas/SideStitching"
            },
            "SoftCoverBinding" : {
              "$ref" : "#/components/schemas/SoftCoverBinding"
            },
            "Tabs" : {
              "$ref" : "#/components/schemas/Tabs"
            },
            "BackCoverColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "BackCoverColorDetails" : {
              "type" : "string"
            },
            "BindingColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "BindingColorDetails" : {
              "type" : "string"
            },
            "BindingOrder" : {
              "type" : "string",
              "enum" : [ "None", "Collecting", "Gathering" ]
            },
            "BindingSide" : {
              "$ref" : "#/components/schemas/Edge"
            },
            "BindingType" : {
              "type" : "string",
              "enum" : [ "AdhesiveNote", "ChannelBinding", "CoilBinding", "CombBinding", "CornerStitch", "EdgeGluing", "HardCover", "LooseBinding", "None", "RingBinding", "SaddleStitch", "SideStitch", "SoftCover", "StripBinding", "Tape", "WireComb" ]
            },
            "ChildRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id"
              },
              "minItems" : 2
            },
            "CoverColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "CoverColorDetails" : {
              "type" : "string"
            }
          },
          "required" : [ "BindingType" ]
        } ]
      },
      "LooseBindingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ChannelBindingDetails" : {
              "$ref" : "#/components/schemas/ChannelBindingDetails"
            },
            "CoilBindingDetails" : {
              "$ref" : "#/components/schemas/CoilBindingDetails"
            },
            "CombBindingDetails" : {
              "$ref" : "#/components/schemas/CombBindingDetails"
            },
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            },
            "RingBindingDetails" : {
              "$ref" : "#/components/schemas/RingBindingDetails"
            },
            "StripBindingDetails" : {
              "$ref" : "#/components/schemas/StripBindingDetails"
            },
            "BindingType" : {
              "type" : "string",
              "enum" : [ "ChannelBinding", "CoilBinding", "CombBinding", "RingBinding", "StripBinding" ]
            },
            "CoverMaterial" : {
              "type" : "string"
            }
          },
          "required" : [ "BindingType" ]
        } ]
      },
      "ColorIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "SurfaceColor" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SurfaceColor"
              }
            }
          }
        } ]
      },
      "ProductionIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "PrintPreference" : {
              "type" : "string",
              "enum" : [ "Balanced", "CostEffective", "Fastest", "HighestQuality" ]
            },
            "PrintProcess" : {
              "type" : "string"
            }
          }
        } ]
      },
      "EmbossingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "EmbossingItem" : {
              "$ref" : "#/components/schemas/EmbossingItem"
            }
          },
          "required" : [ "EmbossingItem" ]
        } ]
      },
      "FoldingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Crease" : {
              "$ref" : "#/components/schemas/Crease"
            },
            "Fold" : {
              "$ref" : "#/components/schemas/Fold"
            },
            "Perforate" : {
              "$ref" : "#/components/schemas/Perforate"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "FoldingDetails" : {
              "type" : "string"
            },
            "Orientation" : {
              "$ref" : "#/components/schemas/Orientation"
            }
          }
        } ]
      },
      "HoleMakingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            }
          },
          "required" : [ "HolePattern" ]
        } ]
      },
      "AssemblingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "AssemblyItem" : {
              "$ref" : "#/components/schemas/AssemblyItem"
            },
            "BindIn" : {
              "$ref" : "#/components/schemas/BindIn"
            },
            "BlowIn" : {
              "$ref" : "#/components/schemas/BlowIn"
            },
            "StickOn" : {
              "$ref" : "#/components/schemas/StickOn"
            },
            "Container" : {
              "type" : "string",
              "format" : "id"
            }
          },
          "required" : [ "Container" ]
        } ]
      },
      "IntentResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object"
        } ]
      },
      "LaminatingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Surface" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Side"
              }
            },
            "Temperature" : {
              "type" : "string",
              "enum" : [ "Hot", "Cold" ]
            },
            "Texture" : {
              "type" : "string"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "Surface" ]
        } ]
      },
      "LayoutIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Bleed" : {
              "type" : "number",
              "format" : "float"
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "FinishedDimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "NamedDimensions" : {
              "type" : "string"
            },
            "NumberUp" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Orientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "Pages" : {
              "type" : "integer"
            },
            "Sides" : {
              "$ref" : "#/components/schemas/Sides"
            },
            "SpreadType" : {
              "$ref" : "#/components/schemas/SpreadType"
            }
          }
        } ]
      },
      "MediaIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "BackCoating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "BackISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "Brand" : {
              "type" : "string"
            },
            "BuyerSupplied" : {
              "type" : "boolean"
            },
            "Coating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "Flute" : {
              "type" : "string"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "ISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "LabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "MediaColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "MediaColorDetails" : {
              "type" : "string"
            },
            "MediaQuality" : {
              "type" : "string"
            },
            "MediaType" : {
              "$ref" : "#/components/schemas/MediaType"
            },
            "MediaTypeDetails" : {
              "type" : "string"
            },
            "Opacity" : {
              "$ref" : "#/components/schemas/EnumOpacity"
            },
            "PrePrinted" : {
              "type" : "boolean"
            },
            "StockType" : {
              "type" : "string"
            },
            "Texture" : {
              "type" : "string"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "Weight" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "MediaType" ]
        } ]
      },
      "VariableIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Area" : {
              "type" : "number",
              "format" : "float"
            },
            "AveragePages" : {
              "type" : "integer"
            },
            "ChildRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id"
              }
            },
            "ColorsUsedBack" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "ColorsUsedFront" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "MaxPages" : {
              "type" : "integer"
            },
            "MinPages" : {
              "type" : "integer"
            },
            "NumberOfCopies" : {
              "type" : "integer"
            },
            "VariableType" : {
              "type" : "string",
              "enum" : [ "OneLine", "AddressField", "IdentificationField", "Area" ]
            },
            "VariableQuality" : {
              "type" : "string",
              "enum" : [ "Simple", "Imprint", "Full" ]
            }
          },
          "required" : [ "VariableType" ]
        } ]
      },
      "ContentCheckIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "PreflightItem" : {
              "$ref" : "#/components/schemas/PreflightItem"
            },
            "ProofItem" : {
              "$ref" : "#/components/schemas/ProofItem"
            }
          }
        } ]
      },
      "ShapeCuttingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "ShapeCut" : {
              "$ref" : "#/components/schemas/ShapeCut"
            }
          },
          "required" : [ "ShapeCut" ]
        } ]
      },
      "SizeIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object"
        } ]
      },
      "ApprovalDetails" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ApprovalPerson" : {
              "$ref" : "#/components/schemas/ApprovalPerson"
            },
            "Comment" : {
              "$ref" : "#/components/schemas/Comment"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ApprovalState" : {
              "type" : "string",
              "enum" : [ "Approved", "ApprovedWithComment", "Rejected" ]
            },
            "ApprovalStateDetails" : {
              "type" : "string"
            }
          },
          "required" : [ "ApprovalState" ]
        } ]
      },
      "ApprovalParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ApprovalPerson" : {
              "$ref" : "#/components/schemas/ApprovalPerson"
            }
          },
          "required" : [ "ApprovalPerson" ]
        } ]
      },
      "Assembly" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AssemblySection" : {
              "$ref" : "#/components/schemas/AssemblySection"
            },
            "BinderySignatureIDs" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Order" : {
              "type" : "string",
              "enum" : [ "Collecting", "Gathering", "None", "List" ]
            }
          },
          "required" : [ "Order" ]
        } ]
      },
      "BarcodeCompParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CompensationProcess" : {
              "type" : "string",
              "enum" : [ "Printing", "Platemaking" ]
            },
            "CompensationValue" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "CompensationProcess", "CompensationValue" ]
        } ]
      },
      "BarcodeReproParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BarcodeCompParams" : {
              "$ref" : "#/components/schemas/BarcodeCompParams"
            },
            "BearerBars" : {
              "type" : "string",
              "enum" : [ "None", "TopBottom", "Box", "BoxHMarks" ]
            },
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "Magnification" : {
              "type" : "number",
              "format" : "float"
            },
            "Masking" : {
              "type" : "string",
              "enum" : [ "None", "WhiteBox" ]
            },
            "ModuleHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ModuleWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "Ratio" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "BendingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Bend" : {
              "type" : "boolean"
            },
            "Punch" : {
              "type" : "boolean"
            },
            "PunchType" : {
              "type" : "string"
            }
          }
        } ]
      },
      "BinderySignature" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MultiPageFold" : {
              "$ref" : "#/components/schemas/MultiPageFold"
            },
            "SignatureCell" : {
              "$ref" : "#/components/schemas/SignatureCell"
            },
            "BinderySignatureSize" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "BinderySignatureType" : {
              "type" : "string",
              "enum" : [ "Fold", "Grid", "Die" ]
            },
            "BindingOrientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "Bottling" : {
              "type" : "string",
              "enum" : [ "All", "Last", "None" ]
            },
            "DieLayoutRef" : {
              "type" : "string",
              "format" : "id"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "NumberUp" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Overfold" : {
              "type" : "number",
              "format" : "float"
            },
            "OverfoldSide" : {
              "type" : "string",
              "enum" : [ "Back", "BackHalf", "Front", "FrontHalf" ]
            },
            "SpreadType" : {
              "$ref" : "#/components/schemas/SpreadType"
            },
            "StaggerColumns" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "StaggerContinuous" : {
              "type" : "boolean"
            },
            "StaggerRows" : {
              "$ref" : "#/components/schemas/FloatList"
            }
          },
          "required" : [ "BinderySignatureType" ]
        } ]
      },
      "BoxFoldingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlankDimensionsX" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BlankDimensionsY" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BoxFoldingType" : {
              "type" : "string",
              "enum" : [ "Type00", "Type01", "Type02", "Type03", "Type04", "Type10", "Type11", "Type12", "Type13", "Type15", "Type20" ]
            }
          },
          "required" : [ "BoxFoldingType" ]
        } ]
      },
      "Color" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorMeasurementConditions" : {
              "$ref" : "#/components/schemas/ColorMeasurementConditions"
            },
            "DeviceNColor" : {
              "$ref" : "#/components/schemas/DeviceNColor"
            },
            "ActualColorName" : {
              "type" : "string"
            },
            "CMYK" : {
              "$ref" : "#/components/schemas/CMYKColor"
            },
            "ColorBook" : {
              "type" : "string"
            },
            "ColorBookEntry" : {
              "type" : "string"
            },
            "ColorDetails" : {
              "type" : "string"
            },
            "ColorName" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "ColorType" : {
              "type" : "string",
              "enum" : [ "DieLine", "Normal", "Opaque", "OpaqueIgnore", "Primer", "Transparent" ]
            },
            "ColorTypeDetails" : {
              "type" : "string"
            },
            "Density" : {
              "type" : "number",
              "format" : "float"
            },
            "Gray" : {
              "type" : "number",
              "format" : "float"
            },
            "Lab" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "NeutralDensity" : {
              "type" : "number",
              "format" : "float"
            },
            "PrintingTechnology" : {
              "type" : "string"
            },
            "PrintStandard" : {
              "type" : "string"
            },
            "RawName" : {
              "type" : "string"
            },
            "Spectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "sRGB" : {
              "$ref" : "#/components/schemas/sRGBColor"
            }
          }
        } ]
      },
      "ColorantControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorantAlias" : {
              "$ref" : "#/components/schemas/ColorantAlias"
            },
            "DeviceNSpace" : {
              "$ref" : "#/components/schemas/DeviceNSpace"
            },
            "ColorantConvertProcess" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "ColorantOrder" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "ColorantParams" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "MappingSelection" : {
              "type" : "string",
              "enum" : [ "UsePDLValues", "UseLocalPrinterValues", "UseProcessColorValues" ]
            },
            "ProcessColorModel" : {
              "type" : "string",
              "enum" : [ "DeviceCMY", "DeviceCMYK", "DeviceGray", "DeviceN", "DeviceRGB", "None" ]
            }
          }
        } ]
      },
      "Component" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "Automation" : {
              "$ref" : "#/components/schemas/EnumAutomation"
            },
            "CartonTopFlaps" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Columns" : {
              "type" : "integer"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id"
              }
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "MaxHeat" : {
              "type" : "number",
              "format" : "float"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id"
            },
            "Overfold" : {
              "type" : "number",
              "format" : "float"
            },
            "OverfoldSide" : {
              "$ref" : "#/components/schemas/Side"
            },
            "ProductType" : {
              "type" : "string"
            },
            "ProductTypeDetails" : {
              "type" : "string"
            },
            "ReaderPageCount" : {
              "type" : "integer"
            },
            "SurfaceCount" : {
              "type" : "integer"
            },
            "WindingResult" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Contact" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Address" : {
              "$ref" : "#/components/schemas/Address"
            },
            "ComChannel" : {
              "$ref" : "#/components/schemas/ComChannel"
            },
            "Company" : {
              "$ref" : "#/components/schemas/Company"
            },
            "Person" : {
              "$ref" : "#/components/schemas/Person"
            },
            "ContactTypeDetails" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "CostCenterID" : {
              "type" : "string"
            },
            "UserID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "Content" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BarcodeProductionParams" : {
              "$ref" : "#/components/schemas/BarcodeProductionParams"
            },
            "ContentMetadata" : {
              "$ref" : "#/components/schemas/ContentMetadata"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ImageCompression" : {
              "$ref" : "#/components/schemas/ImageCompression"
            },
            "OCGControl" : {
              "$ref" : "#/components/schemas/OCGControl"
            },
            "PositionObj" : {
              "$ref" : "#/components/schemas/PositionObj"
            },
            "ScreenSelector" : {
              "$ref" : "#/components/schemas/ScreenSelector"
            },
            "BinderySignatureIDs" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "ContentStatus" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "ContentType" : {
              "type" : "string"
            },
            "HasBleeds" : {
              "type" : "boolean"
            },
            "IsBlank" : {
              "type" : "boolean"
            },
            "IsTrapped" : {
              "type" : "boolean"
            },
            "PageLabel" : {
              "type" : "string"
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "SourceBleedBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceClipBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceTrimBox" : {
              "$ref" : "#/components/schemas/rectangle"
            }
          }
        } ]
      },
      "ConventionalPrintingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Drying" : {
              "$ref" : "#/components/schemas/EnumDrying"
            },
            "FirstSurface" : {
              "$ref" : "#/components/schemas/Side"
            },
            "FountainSolution" : {
              "type" : "string",
              "enum" : [ "On", "Off" ]
            },
            "ModuleDrying" : {
              "$ref" : "#/components/schemas/EnumDrying"
            },
            "Powder" : {
              "type" : "number",
              "format" : "float"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "Speed" : {
              "type" : "number",
              "format" : "float"
            },
            "WorkStyle" : {
              "$ref" : "#/components/schemas/WorkStyle"
            }
          }
        } ]
      },
      "DeliveryParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "DropItem" : {
              "$ref" : "#/components/schemas/DropItem"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "BuyerAccount" : {
              "type" : "string"
            },
            "Earliest" : {
              "type" : "string",
              "format" : "date-time"
            },
            "EarliestDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "Method" : {
              "type" : "string"
            },
            "Ownership" : {
              "type" : "string",
              "enum" : [ "Destination", "Origin" ]
            },
            "Required" : {
              "type" : "string",
              "format" : "date-time"
            },
            "RequiredDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "TrackingID" : {
              "type" : "string"
            },
            "Transfer" : {
              "type" : "string",
              "enum" : [ "BuyerToPrinterDeliver", "BuyerToPrinterPickup", "PrinterToBuyerDeliver", "PrinterToBuyerPickup" ]
            }
          }
        } ]
      },
      "DieLayout" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Media" : {
              "$ref" : "#/components/schemas/Media"
            },
            "RuleLength" : {
              "$ref" : "#/components/schemas/RuleLength"
            },
            "Station" : {
              "$ref" : "#/components/schemas/Station"
            },
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "CutLines" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "DieSide" : {
              "type" : "string",
              "enum" : [ "Up", "Down" ]
            },
            "MediaSide" : {
              "type" : "string",
              "enum" : [ "Front", "Back" ]
            },
            "Rotated" : {
              "type" : "boolean"
            },
            "Waste" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "DieLayoutProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ConvertingConfig" : {
              "$ref" : "#/components/schemas/ConvertingConfig"
            },
            "RepeatDesc" : {
              "$ref" : "#/components/schemas/RepeatDesc"
            },
            "Estimate" : {
              "type" : "boolean"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Anchor"
            }
          },
          "required" : [ "ConvertingConfig", "RepeatDesc" ]
        } ]
      },
      "DigitalPrintingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Collate" : {
              "type" : "string",
              "enum" : [ "None", "Sheet" ]
            },
            "ManualFeed" : {
              "type" : "boolean"
            },
            "PageDelivery" : {
              "type" : "string",
              "enum" : [ "FanFold", "SameOrderFaceUp", "SameOrderFaceDown", "ReverseOrderFaceUp", "ReverseOrderFaceDown" ]
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "Sides" : {
              "type" : "string",
              "enum" : [ "OneSidedFront", "OneSidedBack", "TwoSided", "Unprinted" ]
            }
          }
        } ]
      },
      "ExposedMedia" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id"
            },
            "PlateType" : {
              "type" : "string",
              "enum" : [ "Exposed", "Dummy" ]
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "PunchType" : {
              "type" : "string"
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "MediaRef" ]
        } ]
      },
      "FeedingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CollatingItem" : {
              "$ref" : "#/components/schemas/CollatingItem"
            },
            "Feeder" : {
              "$ref" : "#/components/schemas/Feeder"
            }
          }
        } ]
      },
      "FontPolicy" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PreferredFont" : {
              "type" : "string"
            },
            "UseDefaultFont" : {
              "type" : "boolean"
            },
            "UseFontEmulation" : {
              "type" : "boolean"
            }
          },
          "required" : [ "PreferredFont", "UseDefaultFont", "UseFontEmulation" ]
        } ]
      },
      "ImageCompressionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageCompression" : {
              "$ref" : "#/components/schemas/ImageCompression"
            }
          },
          "required" : [ "ImageCompression" ]
        } ]
      },
      "ImageEnhancementParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageEnhancementOp" : {
              "$ref" : "#/components/schemas/ImageEnhancementOp"
            }
          },
          "required" : [ "ImageEnhancementOp" ]
        } ]
      },
      "ImageSetterParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AdvanceDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "BurnOutArea" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "CenterAcross" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "CutMedia" : {
              "type" : "boolean"
            },
            "ManualFeed" : {
              "type" : "boolean"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "RollCut" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Layout" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "PlacedObject" : {
              "$ref" : "#/components/schemas/PlacedObject"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Position"
            },
            "SheetActivation" : {
              "$ref" : "#/components/schemas/SheetActivation"
            },
            "StripMark" : {
              "$ref" : "#/components/schemas/StripMark"
            },
            "Anchor" : {
              "$ref" : "#/components/schemas/Anchor"
            },
            "Automated" : {
              "type" : "boolean"
            },
            "ExpansionBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id"
            },
            "InnermostShingling" : {
              "type" : "number",
              "format" : "float"
            },
            "MaxCollect" : {
              "type" : "integer"
            },
            "MinCollect" : {
              "type" : "integer"
            },
            "OutermostShingling" : {
              "type" : "number",
              "format" : "float"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "SurfaceContentsBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "WorkStyle" : {
              "$ref" : "#/components/schemas/WorkStyle"
            }
          }
        } ]
      },
      "LayoutElementProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id"
              }
            },
            "ShapeDefRef" : {
              "type" : "string",
              "format" : "id"
            }
          }
        } ]
      },
      "LayoutShift" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ShiftPoint" : {
              "$ref" : "#/components/schemas/ShiftPoint"
            }
          },
          "required" : [ "ShiftPoint" ]
        } ]
      },
      "ManualLaborParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "LaborType" : {
              "type" : "string"
            }
          },
          "required" : [ "LaborType" ]
        } ]
      },
      "Media" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "ColorMeasurementConditions" : {
              "$ref" : "#/components/schemas/ColorMeasurementConditions"
            },
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "MediaLayers" : {
              "$ref" : "#/components/schemas/MediaLayers"
            },
            "TabDimensions" : {
              "$ref" : "#/components/schemas/TabDimensions"
            },
            "BackBrightness" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCIETint" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCIEWhiteness" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCoating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "BackCoatingDetail" : {
              "type" : "string"
            },
            "BackGlossValue" : {
              "type" : "number",
              "format" : "float"
            },
            "BackISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "BackLabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "BackSpectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "Brightness" : {
              "type" : "number",
              "format" : "float"
            },
            "CIETint" : {
              "type" : "number",
              "format" : "float"
            },
            "CIEWhiteness" : {
              "type" : "number",
              "format" : "float"
            },
            "Coating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "CoatingDetail" : {
              "type" : "string"
            },
            "CoreWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Dimension" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Flute" : {
              "type" : "string"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "GlossValue" : {
              "type" : "number",
              "format" : "float"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "ImagableSide" : {
              "type" : "string",
              "enum" : [ "Front", "Back", "Both", "Neither" ]
            },
            "InnerCoreDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "InsideLoss" : {
              "type" : "number",
              "format" : "float"
            },
            "ISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "LabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "MediaColorName" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "MediaColorNameDetails" : {
              "type" : "string"
            },
            "MediaQuality" : {
              "type" : "string"
            },
            "MediaSetCount" : {
              "type" : "integer"
            },
            "MediaType" : {
              "$ref" : "#/components/schemas/MediaType"
            },
            "MediaTypeDetails" : {
              "type" : "string"
            },
            "MediaUnit" : {
              "type" : "string",
              "enum" : [ "Continuous", "Roll", "Sheet" ]
            },
            "Opacity" : {
              "$ref" : "#/components/schemas/EnumOpacity"
            },
            "OpacityLevel" : {
              "type" : "number",
              "format" : "float"
            },
            "OuterCoreDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "OutsideGain" : {
              "type" : "number",
              "format" : "float"
            },
            "PlateTechnology" : {
              "type" : "string",
              "enum" : [ "FlexoAnalogSolvent", "FlexoAnalogThermal", "FlexoDigitalSolvent", "FlexoDigitalThermal", "FlexoDirectEngraving", "InkJet", "Thermal", "UV", "Visible" ]
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "PrintingTechnology" : {
              "type" : "string"
            },
            "RecycledPercentage" : {
              "type" : "number",
              "format" : "float"
            },
            "ReliefThickness" : {
              "type" : "number",
              "format" : "float"
            },
            "RollDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "ShrinkIndex" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "SleeveInterlock" : {
              "type" : "string"
            },
            "Spectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "StockType" : {
              "type" : "string"
            },
            "Texture" : {
              "type" : "string"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "Weight" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "MediaType" ]
        } ]
      },
      "MiscConsumable" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "Color" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "ColorDetails" : {
              "type" : "string"
            },
            "Type" : {
              "type" : "string"
            },
            "TypeDetails" : {
              "type" : "string"
            }
          },
          "required" : [ "Type" ]
        } ]
      },
      "PackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object"
        } ]
      },
      "PDLCreationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FontParams" : {
              "$ref" : "#/components/schemas/FontParams"
            },
            "PDFCreationDetails" : {
              "$ref" : "#/components/schemas/PDFCreationDetails"
            },
            "PSCreationDetails" : {
              "$ref" : "#/components/schemas/PSCreationDetails"
            },
            "MimeType" : {
              "type" : "string"
            }
          },
          "required" : [ "MimeType" ]
        } ]
      },
      "PreflightParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "PreflightTest" : {
              "$ref" : "#/components/schemas/PreflightTest"
            }
          }
        } ]
      },
      "PreflightReport" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "PreflightCheck" : {
              "$ref" : "#/components/schemas/PreflightCheck"
            },
            "ErrorCount" : {
              "type" : "integer"
            },
            "WarningCount" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Preview" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Compensation" : {
              "type" : "string",
              "enum" : [ "None", "Film", "Plate", "Press" ]
            },
            "CTM" : {
              "$ref" : "#/components/schemas/matrix"
            },
            "PreviewFileType" : {
              "type" : "string",
              "enum" : [ "PNG", "CIP3Multiple", "CIP3Single" ]
            }
          }
        } ]
      },
      "QualityControlParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BindingQualityParams" : {
              "$ref" : "#/components/schemas/BindingQualityParams"
            },
            "BindingQuality" : {
              "$ref" : "#/components/schemas/BindingQuality"
            },
            "ColorMeasurement" : {
              "$ref" : "#/components/schemas/ColorMeasurement"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "RegistrationQuality" : {
              "$ref" : "#/components/schemas/RegistrationQuality"
            },
            "Box" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Face"
            },
            "QualityBase" : {
              "type" : "string",
              "enum" : [ "Absolute", "Standard" ]
            },
            "QualityControlMethods" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "SampleInterval" : {
              "type" : "integer"
            },
            "Severity" : {
              "$ref" : "#/components/schemas/Score"
            },
            "SourceDeviceID" : {
              "type" : "string"
            },
            "TimeInterval" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "QualityControlResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BindingQualityMeasurement" : {
              "$ref" : "#/components/schemas/BindingQualityMeasurement"
            },
            "BindingQuality" : {
              "$ref" : "#/components/schemas/BindingQuality"
            },
            "ColorMeasurement" : {
              "$ref" : "#/components/schemas/ColorMeasurement"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Inspection" : {
              "$ref" : "#/components/schemas/Inspection"
            },
            "RegistrationQuality" : {
              "$ref" : "#/components/schemas/RegistrationQuality"
            },
            "Box" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "End" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Failed" : {
              "type" : "integer"
            },
            "Measurements" : {
              "type" : "integer"
            },
            "MeasurementUsage" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "Master", "Standard" ]
              }
            },
            "Passed" : {
              "type" : "integer"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Face"
            },
            "QualityControlMethods" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Sample" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "Severity" : {
              "$ref" : "#/components/schemas/Score"
            },
            "SourceDeviceID" : {
              "type" : "string"
            },
            "Start" : {
              "type" : "string",
              "format" : "date-time"
            }
          }
        } ]
      },
      "RegisterMark" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MarkElement" : {
              "$ref" : "#/components/schemas/MarkElement"
            },
            "Center" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "MarkName" : {
              "type" : "string"
            },
            "MarkType" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "MarkUsage" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "Color", "PaperPath", "Tile" ]
              }
            },
            "Rotation" : {
              "type" : "number",
              "format" : "float"
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "RunList" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ByteMap" : {
              "$ref" : "#/components/schemas/ByteMap"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "MetadataMap" : {
              "$ref" : "#/components/schemas/MetadataMap"
            },
            "Automation" : {
              "$ref" : "#/components/schemas/EnumAutomation"
            },
            "ClipPath" : {
              "$ref" : "#/components/schemas/PDFPath"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id"
              }
            },
            "Docs" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "DocPages" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "EndOfDocument" : {
              "type" : "boolean"
            },
            "EndOfSet" : {
              "type" : "boolean"
            },
            "FinishedPages" : {
              "type" : "integer"
            },
            "LogicalPage" : {
              "type" : "integer"
            },
            "NPage" : {
              "type" : "integer"
            },
            "OrdType" : {
              "type" : "string",
              "enum" : [ "Content", "Insert", "Reservation" ]
            },
            "Pages" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "Sets" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "SourceBleedBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceClipBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceMediaBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "SourceTrimBox" : {
              "$ref" : "#/components/schemas/rectangle"
            }
          }
        } ]
      },
      "SeparationControlParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AutomatedOverPrintParams" : {
              "$ref" : "#/components/schemas/AutomatedOverPrintParams"
            }
          }
        } ]
      },
      "ShapeDef" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Shape" : {
              "$ref" : "#/components/schemas/Shape"
            },
            "Area" : {
              "type" : "number",
              "format" : "float"
            },
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "CutLines" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "FlatDimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id"
            },
            "MediaSide" : {
              "$ref" : "#/components/schemas/Side"
            },
            "ResourceWeight" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ShapeDefProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ObjectModel" : {
              "$ref" : "#/components/schemas/ObjectModel"
            },
            "ShapeTemplate" : {
              "$ref" : "#/components/schemas/ShapeTemplate"
            }
          }
        } ]
      },
      "SheetOptimizingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ConvertingConfig" : {
              "$ref" : "#/components/schemas/ConvertingConfig"
            },
            "GangElement" : {
              "$ref" : "#/components/schemas/GangElement"
            },
            "Policy" : {
              "type" : "string",
              "enum" : [ "All", "Collect", "Optimized" ]
            }
          },
          "required" : [ "GangElement" ]
        } ]
      },
      "TransferCurve" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CTM" : {
              "$ref" : "#/components/schemas/matrix"
            },
            "Curve" : {
              "$ref" : "#/components/schemas/TransferFunction"
            }
          }
        } ]
      },
      "UsageCounter" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CounterTypes" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Scope" : {
              "type" : "string",
              "enum" : [ "Lifetime", "PowerOn", "Job" ]
            }
          },
          "required" : [ "Scope" ]
        } ]
      },
      "BundlingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Copies" : {
              "type" : "integer"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "SurfaceColor" : {
        "type" : "object",
        "properties" : {
          "Certification" : {
            "$ref" : "#/components/schemas/Certification"
          },
          "Coatings" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "ColorsUsed" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          },
          "Coverage" : {
            "type" : "number",
            "format" : "float"
          },
          "PrintStandard" : {
            "type" : "string"
          },
          "Surface" : {
            "$ref" : "#/components/schemas/Side"
          }
        },
        "required" : [ "Surface" ]
      },
      "FoldingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Crease" : {
              "$ref" : "#/components/schemas/Crease"
            },
            "Cut" : {
              "$ref" : "#/components/schemas/Cut"
            },
            "Fold" : {
              "$ref" : "#/components/schemas/Fold"
            },
            "Perforate" : {
              "$ref" : "#/components/schemas/Perforate"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "FoldingDetails" : {
              "type" : "string"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "HoleMakingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "$ref" : "#/components/schemas/HolePattern"
            }
          },
          "required" : [ "HolePattern" ]
        } ]
      },
      "StitchingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Angle" : {
              "type" : "number",
              "format" : "float"
            },
            "NumberOfStitches" : {
              "type" : "integer"
            },
            "Offset" : {
              "type" : "number",
              "format" : "float"
            },
            "StapleShape" : {
              "$ref" : "#/components/schemas/StapleShape"
            },
            "StitchOrigin" : {
              "type" : "string",
              "enum" : [ "TrimBoxCenter", "TrimBoxJogSide", "UntrimmedJogSide" ]
            },
            "StitchPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "StitchType" : {
              "type" : "string",
              "enum" : [ "Corner", "Saddle", "Side" ]
            },
            "StitchWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "TightBacking" : {
              "type" : "string",
              "enum" : [ "Round", "RoundBacked", "Flat", "FlatBacked" ]
            },
            "WireGauge" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ThreadSewingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlindStitch" : {
              "type" : "boolean"
            },
            "NeedlePositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "NumberOfNeedles" : {
              "type" : "integer"
            },
            "Offset" : {
              "type" : "number",
              "format" : "float"
            },
            "SewingPattern" : {
              "type" : "string",
              "enum" : [ "CombinedStaggered", "Normal", "Side", "Staggered" ]
            },
            "ThreadThickness" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "TrimmingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "TrimCover" : {
              "type" : "string",
              "enum" : [ "Back", "Both", "Front", "Neither" ]
            },
            "TrimmingOffset" : {
              "type" : "number",
              "format" : "float"
            },
            "Width" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "WebInlineFinishingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FolderProduction" : {
              "$ref" : "#/components/schemas/FolderProduction"
            },
            "ProductionPath" : {
              "$ref" : "#/components/schemas/ProductionPath"
            }
          }
        } ]
      },
      "ColorCorrectionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorCorrectionOp" : {
              "$ref" : "#/components/schemas/ColorCorrectionOp"
            }
          }
        } ]
      },
      "ColorSpaceConversionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorSpaceConversionOp" : {
              "$ref" : "#/components/schemas/ColorSpaceConversionOp"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ICCProfileUsage" : {
              "type" : "string",
              "enum" : [ "UsePDL", "UseSupplied" ]
            }
          }
        } ]
      },
      "Ink" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Certification" : {
              "$ref" : "#/components/schemas/Certification"
            },
            "IdentificationField" : {
              "$ref" : "#/components/schemas/IdentificationField"
            },
            "InkType" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "SpecificYield" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "InkZoneCalculationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "PrintableArea" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "ZoneHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Zones" : {
              "type" : "integer"
            },
            "ZonesY" : {
              "type" : "integer"
            },
            "ZoneWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "InkZoneProfile" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ZoneHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ZoneSettingsX" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ZoneSettingsY" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ZoneWidth" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "ZoneSettingsX", "ZoneWidth" ]
        } ]
      },
      "PreviewGenerationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AspectRatio" : {
              "type" : "string",
              "enum" : [ "CenterMax", "CenterMin", "Crop", "Expand", "Ignore" ]
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "RenderingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AutomatedOverPrintParams" : {
              "$ref" : "#/components/schemas/AutomatedOverPrintParams"
            },
            "ObjectResolution" : {
              "$ref" : "#/components/schemas/ObjectResolution"
            },
            "TIFFFormatParams" : {
              "$ref" : "#/components/schemas/TIFFFormatParams"
            },
            "BandHeight" : {
              "type" : "integer"
            },
            "BandOrdering" : {
              "type" : "string",
              "enum" : [ "BandMajor", "ColorMajor" ]
            },
            "BandWidth" : {
              "type" : "integer"
            },
            "ColorantDepth" : {
              "type" : "integer"
            },
            "Interleaved" : {
              "type" : "boolean"
            },
            "MimeType" : {
              "type" : "string"
            }
          }
        } ]
      },
      "ScreeningParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ScreenSelector" : {
              "$ref" : "#/components/schemas/ScreenSelector"
            },
            "IgnoreSourceFile" : {
              "type" : "boolean"
            }
          },
          "required" : [ "ScreenSelector" ]
        } ]
      },
      "TrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageInternalTrapping" : {
              "type" : "boolean"
            },
            "ImageMaskTrapping" : {
              "type" : "boolean"
            },
            "ImageToImageTrapping" : {
              "type" : "boolean"
            },
            "ImageToObjectTrapping" : {
              "type" : "boolean"
            },
            "MinimumBlackWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "StepLimit" : {
              "type" : "number",
              "format" : "float"
            },
            "TrapColorScaling" : {
              "type" : "number",
              "format" : "float"
            },
            "TrapWidth" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "PrintCondition" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorantOrder" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            },
            "Name" : {
              "type" : "string"
            },
            "PrintQuality" : {
              "$ref" : "#/components/schemas/PrintQuality"
            }
          },
          "required" : [ "ColorantOrder", "Name" ]
        } ]
      },
      "WindingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Copies" : {
              "type" : "integer"
            },
            "Diameter" : {
              "type" : "number",
              "format" : "float"
            },
            "Fixation" : {
              "type" : "string"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "RasterReadingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "Center" : {
              "type" : "boolean"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id"
            },
            "Scaling" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ScalingOrigin" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "CommandModifyQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ModifyQueueEntryParams" : {
              "$ref" : "#/components/schemas/ModifyQueueEntryParams"
            }
          },
          "required" : [ "ModifyQueueEntryParams" ]
        } ]
      },
      "ResponseModifyQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "QueueEntry" : {
              "$ref" : "#/components/schemas/QueueEntry"
            }
          }
        } ]
      },
      "CommandForceGang" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "GangCmdFilter" : {
              "$ref" : "#/components/schemas/GangCmdFilter"
            }
          },
          "required" : [ "GangCmdFilter" ]
        } ]
      },
      "ResponseForceGang" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "QueryGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "GangQuFilter" : {
              "$ref" : "#/components/schemas/GangQuFilter"
            }
          }
        } ]
      },
      "ResponseGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "GangInfo" : {
              "$ref" : "#/components/schemas/GangInfo"
            }
          }
        } ]
      },
      "SignalGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "GangInfo" : {
              "$ref" : "#/components/schemas/GangInfo"
            }
          }
        } ]
      },
      "QueryKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceFilter" : {
              "$ref" : "#/components/schemas/DeviceFilter"
            }
          }
        } ]
      },
      "ResponseKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            }
          }
        } ]
      },
      "SignalKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            }
          }
        } ]
      },
      "QueryKnownMessages" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object"
        } ]
      },
      "ResponseKnownMessages" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "MessageService" : {
              "$ref" : "#/components/schemas/MessageService"
            }
          }
        } ]
      },
      "QueryKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionFilter" : {
              "$ref" : "#/components/schemas/SubscriptionFilter"
            }
          }
        } ]
      },
      "ResponseKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "$ref" : "#/components/schemas/SubscriptionInfo"
            }
          }
        } ]
      },
      "SignalKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "$ref" : "#/components/schemas/SubscriptionInfo"
            }
          }
        } ]
      },
      "QueryNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "NotificationFilter" : {
              "$ref" : "#/components/schemas/NotificationFilter"
            }
          }
        } ]
      },
      "ResponseNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "SignalNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            }
          },
          "required" : [ "Notification" ]
        } ]
      },
      "CommandPipeControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "PipeParams" : {
              "$ref" : "#/components/schemas/PipeParams"
            }
          },
          "required" : [ "PipeParams" ]
        } ]
      },
      "ResponsePipeControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "QueryQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "QueueStatusParams" : {
              "$ref" : "#/components/schemas/QueueStatusParams"
            }
          }
        } ]
      },
      "ResponseQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "Queue" : {
              "$ref" : "#/components/schemas/Queue"
            }
          }
        } ]
      },
      "SignalQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Queue" : {
              "$ref" : "#/components/schemas/Queue"
            }
          },
          "required" : [ "Queue" ]
        } ]
      },
      "CommandRequestQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "RequestQueueEntryParams" : {
              "$ref" : "#/components/schemas/RequestQueueEntryParams"
            }
          }
        } ]
      },
      "ResponseRequestQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "CommandResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceCmdParams" : {
              "$ref" : "#/components/schemas/ResourceCmdParams"
            }
          },
          "required" : [ "ResourceCmdParams" ]
        } ]
      },
      "QueryResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceQuParams" : {
              "$ref" : "#/components/schemas/ResourceQuParams"
            }
          },
          "required" : [ "ResourceQuParams" ]
        } ]
      },
      "ResponseResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          }
        } ]
      },
      "SignalResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          }
        } ]
      },
      "CommandResubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ResubmissionParams" : {
              "$ref" : "#/components/schemas/ResubmissionParams"
            }
          },
          "required" : [ "ResubmissionParams" ]
        } ]
      },
      "ResponseResubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "CommandReturnQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ReturnQueueEntryParams" : {
              "$ref" : "#/components/schemas/ReturnQueueEntryParams"
            }
          },
          "required" : [ "ReturnQueueEntryParams" ]
        } ]
      },
      "ResponseReturnQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "CommandShutDown" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ShutDownCmdParams" : {
              "$ref" : "#/components/schemas/ShutDownCmdParams"
            }
          },
          "required" : [ "ShutDownCmdParams" ]
        } ]
      },
      "ResponseShutDown" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "QueryStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "StatusQuParams" : {
              "$ref" : "#/components/schemas/StatusQuParams"
            }
          }
        } ]
      },
      "ResponseStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          }
        } ]
      },
      "SignalStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          },
          "required" : [ "DeviceInfo" ]
        } ]
      },
      "CommandStopPersistentChannel" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "StopPersChParams" : {
              "$ref" : "#/components/schemas/StopPersChParams"
            }
          },
          "required" : [ "StopPersChParams" ]
        } ]
      },
      "ResponseStopPersistentChannel" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "$ref" : "#/components/schemas/SubscriptionInfo"
            }
          }
        } ]
      },
      "CommandSubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "QueueSubmissionParams" : {
              "$ref" : "#/components/schemas/QueueSubmissionParams"
            }
          },
          "required" : [ "QueueSubmissionParams" ]
        } ]
      },
      "ResponseSubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "QueueEntry" : {
              "$ref" : "#/components/schemas/QueueEntry"
            }
          }
        } ]
      },
      "CommandWakeUp" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object"
        } ]
      },
      "ResponseWakeUp" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object"
        } ]
      },
      "language" : {
        "type" : "string"
      },
      "languages" : {
        "type" : "array",
        "items" : {
          "$ref" : "#/components/schemas/language"
        }
      },
      "PDFPath" : {
        "type" : "string"
      },
      "PrintQuality" : {
        "type" : "string",
        "enum" : [ "High", "Normal", "Draft" ]
      },
      "rectangle" : {
        "minItems" : 4,
        "maxItems" : 4,
        "$ref" : "#/components/schemas/FloatList"
      },
      "IntegerRange" : {
        "minItems" : 2,
        "maxItems" : 2,
        "$ref" : "#/components/schemas/IntegerList"
      },
      "IntegerList" : {
        "type" : "array",
        "items" : {
          "type" : "integer"
        }
      },
      "FloatList" : {
        "type" : "array",
        "items" : {
          "type" : "number",
          "format" : "float"
        }
      },
      "shape" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "URL" : {
        "type" : "string",
        "format" : "uri"
      },
      "XPath" : {
        "type" : "string"
      },
      "regExp" : {
        "type" : "string"
      },
      "XYPair" : {
        "minItems" : 2,
        "maxItems" : 2,
        "$ref" : "#/components/schemas/FloatList"
      },
      "matrix" : {
        "minItems" : 6,
        "maxItems" : 6,
        "$ref" : "#/components/schemas/FloatList"
      },
      "LabColor" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "CMYKColor" : {
        "minItems" : 4,
        "maxItems" : 4,
        "$ref" : "#/components/schemas/FloatList"
      },
      "TransferFunction" : {
        "$ref" : "#/components/schemas/FloatList"
      },
      "Version" : {
        "type" : "string",
        "enum" : [ "2.0", "2.1" ]
      },
      "sRGBColor" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "FoldCatalog" : {
        "type" : "string",
        "pattern" : "F[0-9]+-([0-9]+|X)"
      },
      "MediaType" : {
        "type" : "string",
        "enum" : [ "Blanket", "CorrugatedBoard", "Disc", "EmbossingFoil", "Film", "Foil", "GravureCylinder", "ImagingCylinder", "LaminatingFoil", "MountingTape", "Other", "Paper", "Plate", "Screen", "SelfAdhesive", "ShrinkFoil", "Sleeve", "Textile", "Transparency", "Vinyl" ]
      },
      "Activation" : {
        "type" : "string",
        "enum" : [ "Informative", "Held", "Active", "PendingReturn", "Removed" ]
      },
      "BundleType" : {
        "type" : "string",
        "enum" : [ "BoundSet", "Box", "Carton", "CollectedStack", "CompensatedStack", "Product", "Pallet", "Roll", "Sheet", "Stack", "StrappedStack", "StrappedCompensatedStack", "WrappedBundle" ]
      },
      "Side" : {
        "type" : "string",
        "enum" : [ "Back", "Front" ]
      },
      "NodeStatus" : {
        "type" : "string",
        "enum" : [ "Aborted", "Cleanup", "Completed", "InProgress", "Setup", "Stopped", "Suspended", "Waiting" ]
      },
      "EnumChannelMode" : {
        "type" : "string",
        "enum" : [ "FireAndForget", "Reliable" ]
      },
      "Scope" : {
        "type" : "string",
        "enum" : [ "Allowed", "Estimate", "Job", "Present" ]
      },
      "EnumGangPolicy" : {
        "type" : "string",
        "enum" : [ "Gang", "GangAndForce", "NoGang" ]
      },
      "Edge" : {
        "type" : "string",
        "enum" : [ "Bottom", "Left", "Right", "Top" ]
      },
      "Face" : {
        "type" : "string",
        "enum" : [ "Back", "Bottom", "Front", "Left", "Right", "Top" ]
      },
      "EnumGlue" : {
        "type" : "string",
        "enum" : [ "ColdGlue", "Hotmelt", "PUR" ]
      },
      "TightBacking" : {
        "type" : "string",
        "enum" : [ "Round", "RoundBacked", "Flat", "FlatBacked" ]
      },
      "EnumEmbossDirection" : {
        "type" : "string",
        "enum" : [ "Both", "Depressed", "Flat", "Raised" ]
      },
      "Sides" : {
        "type" : "string",
        "enum" : [ "OneSided", "OneSidedBack", "TwoSidedHeadToFoot", "TwoSidedHeadToHead" ]
      },
      "MediaDirection" : {
        "type" : "string",
        "enum" : [ "Any", "SameDirection", "XDirection", "YDirection" ]
      },
      "EnumOpacity" : {
        "type" : "string",
        "enum" : [ "Opaque", "Translucent", "Transparent" ]
      },
      "EnumPreflightAction" : {
        "type" : "string",
        "enum" : [ "Abort", "Continue", "Repair" ]
      },
      "EnumDeviceAxis" : {
        "type" : "string",
        "enum" : [ "None", "FeedDirection", "MediaWidth", "Both" ]
      },
      "Polarity" : {
        "type" : "string",
        "enum" : [ "Negative", "Positive" ]
      },
      "EnumAutomation" : {
        "type" : "string",
        "enum" : [ "Dynamic", "Static" ]
      },
      "PositionPolicy" : {
        "type" : "string",
        "enum" : [ "Exact", "Free" ]
      },
      "EnumDrying" : {
        "type" : "string",
        "enum" : [ "Heatset", "IR", "Off", "On", "UV" ]
      },
      "SheetLay" : {
        "type" : "string",
        "enum" : [ "Center", "Left", "Right" ]
      },
      "RenderingIntent" : {
        "type" : "string",
        "enum" : [ "AbsoluteColorimetric", "ColorSpaceDependent", "Perceptual", "RelativeColorimetric", "Saturation" ]
      },
      "EnumIncludeResources" : {
        "type" : "string",
        "enum" : [ "IncludeNever", "IncludeOncePerDoc", "IncludeOncePerPage" ]
      },
      "ISOPaperSubstrate" : {
        "type" : "string",
        "enum" : [ "PS1", "PS2", "PS3", "PS4", "PS5", "PS6", "PS7", "PS8", "LWCPlus", "LWCStandard", "NewsPlus", "SCPlus", "SCStandard", "SNP" ]
      },
      "EmbossType" : {
        "type" : "string",
        "enum" : [ "BlindEmbossing", "Braille", "EmbossedFinish", "FoilEmbossing", "FoilStamping" ]
      },
      "EnumFitPolicy" : {
        "type" : "string",
        "enum" : [ "NoRepeat", "RepeatToFill", "RepeatUnclipped", "StretchToFit", "UndistortedScaleToFit" ]
      },
      "EnumFeedQuality" : {
        "type" : "string",
        "enum" : [ "NotActive", "Check", "Waste", "StopNoWaste", "StopWaste" ]
      },
      "EnumTopBottom" : {
        "type" : "string",
        "enum" : [ "Top", "Bottom" ]
      },
      "Anchor" : {
        "type" : "string",
        "enum" : [ "BottomCenter", "BottomLeft", "BottomRight", "Center", "CenterLeft", "CenterRight", "TopCenter", "TopLeft", "TopRight" ]
      },
      "NamedColor" : {
        "type" : "string",
        "pattern" : "((A|a)(L|l)(I|i)(C|c)(E|e)(B|b)(L|l)(U|u)(E|e))"
      },
      "Orientation" : {
        "type" : "string",
        "enum" : [ "Rotate0", "Rotate90", "Rotate180", "Rotate270", "Flip0", "Flip90", "Flip180", "Flip270" ]
      },
      "WorkStyle" : {
        "type" : "string",
        "enum" : [ "Perfecting", "Simplex", "WorkAndBack", "WorkAndTumble", "WorkAndTurn" ]
      },
      "Coating" : {
        "type" : "string",
        "enum" : [ "Coated", "Gloss", "Matte", "None", "Satin" ]
      },
      "SourceObjects" : {
        "type" : "array",
        "items" : {
          "type" : "string",
          "enum" : [ "ImagePhotographic", "ImageScreenShot", "LineArt", "SmoothShades", "Text" ]
        }
      },
      "textElement" : {
        "type" : "string"
      },
      "Severity" : {
        "type" : "string",
        "enum" : [ "Event", "Information", "Warning", "Error", "Fatal" ]
      },
      "DeviceStatus" : {
        "type" : "string",
        "enum" : [ "Cleanup", "Idle", "NonProductive", "Offline", "Production", "Setup", "Stopped" ]
      },
      "UpdateGranularity" : {
        "type" : "string",
        "enum" : [ "All", "ChangesOnly" ]
      },
      "StapleShape" : {
        "type" : "string",
        "enum" : [ "Butted", "ClinchOut", "Crown", "Eyelet", "Overlap" ]
      },
      "SpreadType" : {
        "type" : "string",
        "enum" : [ "SinglePage", "Spread" ]
      }
    }
  }
}